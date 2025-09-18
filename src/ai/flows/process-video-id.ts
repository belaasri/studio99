'use server';

/**
 * @fileOverview A flow to process YouTube video IDs, fetch video content, and provide a static preview.
 *
 * - processVideoId - A function that handles the processing of a YouTube video ID.
 * - ProcessVideoIdInput - The input type for the processVideoId function.
 * - ProcessVideoIdOutput - The return type for the processVideoId function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProcessVideoIdInputSchema = z.object({
  videoId: z.string().describe('The YouTube video ID.'),
});
export type ProcessVideoIdInput = z.infer<typeof ProcessVideoIdInputSchema>;

const ProcessVideoIdOutputSchema = z.object({
  staticPreviewUrl: z.string().describe('The URL of the static preview image.'),
  videoDownloadUrl: z.string().describe('The URL to download the video content.'),
});
export type ProcessVideoIdOutput = z.infer<typeof ProcessVideoIdOutputSchema>;

export async function processVideoId(input: ProcessVideoIdInput): Promise<ProcessVideoIdOutput> {
  return processVideoIdFlow(input);
}

const fetchVideoTool = ai.defineTool({
  name: 'fetchVideo',
  description: 'Fetches the video download URL and static preview URL from a YouTube video ID.',
  inputSchema: z.object({
    videoId: z.string().describe('The YouTube video ID.'),
  }),
  outputSchema: z.object({
    staticPreviewUrl: z.string().describe('The URL of the static preview image.'),
    videoDownloadUrl: z.string().describe('The URL to download the video content.'),
  }),
},
async (input) => {
    // This is a placeholder and will not work in production.
    // In a real application, you would use a service like ytdl-core or a dedicated API 
    // to fetch the video download URL.
    const videoDownloadUrl = `https://example.com/download?v=${input.videoId}`;
    const staticPreviewUrl = `https://img.youtube.com/vi/${input.videoId}/0.jpg`;

    return {
      staticPreviewUrl: staticPreviewUrl,
      videoDownloadUrl: videoDownloadUrl,
    };
});

const processVideoIdPrompt = ai.definePrompt({
  name: 'processVideoIdPrompt',
  tools: [fetchVideoTool],
  input: {schema: ProcessVideoIdInputSchema},
  output: {schema: ProcessVideoIdOutputSchema},
  prompt: `You are an AI assistant that processes YouTube video IDs. When a user provides a video ID, use the fetchVideo tool to get the video download URL and static preview URL. Respond to the user with the static preview URL and video download URL.

Video ID: {{{videoId}}}`, 
});

const processVideoIdFlow = ai.defineFlow(
  {
    name: 'processVideoIdFlow',
    inputSchema: ProcessVideoIdInputSchema,
    outputSchema: ProcessVideoIdOutputSchema,
  },
  async input => {
    const {output} = await processVideoIdPrompt(input);
    return output!;
  }
);
