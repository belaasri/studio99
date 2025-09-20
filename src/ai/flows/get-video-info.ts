'use server';

/**
 * @fileOverview A flow to get video information including title, thumbnail, and download formats.
 *
 * - getVideoInfo - A function that gets video info.
 * - GetVideoInfoInput - The input type for the getVideoInfo function.
 * - GetVideoInfoOutput - The return type for the getVideoInfo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetVideoInfoInputSchema = z.object({
  videoId: z.string().describe('The YouTube video ID.'),
});
export type GetVideoInfoInput = z.infer<typeof GetVideoInfoInputSchema>;

const VideoFormatSchema = z.object({
    quality: z.string().describe('The quality label of the video format (e.g., 720p, 1080p).'),
    url: z.string().describe('The download URL for this video format.'),
});

const GetVideoInfoOutputSchema = z.object({
  title: z.string().describe('The title of the video.'),
  thumbnailUrl: z.string().describe('The URL of the video thumbnail.'),
  formats: z.array(VideoFormatSchema).describe('An array of available video formats.'),
});
export type GetVideoInfoOutput = z.infer<typeof GetVideoInfoOutputSchema>;

export async function getVideoInfo(input: GetVideoInfoInput): Promise<GetVideoInfoOutput> {
  return getVideoInfoFlow(input);
}

const fetchVideoInfoTool = ai.defineTool({
  name: 'fetchVideoInfo',
  description: 'Fetches video information including title, thumbnail, and download formats.',
  inputSchema: GetVideoInfoInputSchema,
  outputSchema: GetVideoInfoOutputSchema,
},
async (input) => {
    // This is a placeholder and will not work in production.
    // In a real application, you would use a service like ytdl-core or a dedicated API 
    // to fetch video information.
    return {
      title: 'Placeholder Video Title',
      thumbnailUrl: `https://img.youtube.com/vi/${input.videoId}/0.jpg`,
      formats: [
        { quality: '1080p', url: `https://example.com/download?v=${input.videoId}&q=1080p` },
        { quality: '720p', url: `https://example.com/download?v=${input.videoId}&q=720p` },
        { quality: '480p', url: `https://example.com/download?v=${input.videoId}&q=480p` },
      ],
    };
});

const getVideoInfoPrompt = ai.definePrompt({
  name: 'getVideoInfoPrompt',
  tools: [fetchVideoInfoTool],
  input: {schema: GetVideoInfoInputSchema},
  output: {schema: GetVideoInfoOutputSchema},
  prompt: `You are an AI assistant that provides information about YouTube videos. When a user provides a video ID, use the fetchVideoInfo tool to get the video's title, thumbnail URL, and available download formats.

Video ID: {{{videoId}}}`, 
});

const getVideoInfoFlow = ai.defineFlow(
  {
    name: 'getVideoInfoFlow',
    inputSchema: GetVideoInfoInputSchema,
    outputSchema: GetVideoInfoOutputSchema,
  },
  async input => {
    const {output} = await getVideoInfoPrompt(input);
    return output!;
  }
);
