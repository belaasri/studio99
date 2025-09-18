'use server';

/**
 * @fileOverview This file defines a Genkit flow that takes a YouTube video ID as input and returns a direct download link for the video.
 *
 * - generateDownloadLink - A function that takes a YouTube video ID and returns a direct download link.
 * - GenerateDownloadLinkInput - The input type for the generateDownloadLink function.
 * - GenerateDownloadLinkOutput - The return type for the generateDownloadLink function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDownloadLinkInputSchema = z.object({
  videoId: z.string().describe('The YouTube video ID.'),
});
export type GenerateDownloadLinkInput = z.infer<typeof GenerateDownloadLinkInputSchema>;

const GenerateDownloadLinkOutputSchema = z.object({
  downloadLink: z.string().describe('The direct download link for the video.'),
});
export type GenerateDownloadLinkOutput = z.infer<typeof GenerateDownloadLinkOutputSchema>;

export async function generateDownloadLink(input: GenerateDownloadLinkInput): Promise<GenerateDownloadLinkOutput> {
  return generateDownloadLinkFlow(input);
}

const getVideoDownloadLink = ai.defineTool({
  name: 'getVideoDownloadLink',
  description: 'Returns a direct download link for a YouTube video given its ID.',
  inputSchema: z.object({
    videoId: z.string().describe('The YouTube video ID.'),
  }),
  outputSchema: z.string(),
}, async (input) => {
  // TODO: Implement the logic to fetch the download link from YouTube's API.
  // This is a placeholder implementation.
  const downloadLink = `https://example.com/download/${input.videoId}.mp4`;
  return downloadLink;
});

const prompt = ai.definePrompt({
  name: 'generateDownloadLinkPrompt',
  tools: [getVideoDownloadLink],
  input: {schema: GenerateDownloadLinkInputSchema},
  output: {schema: GenerateDownloadLinkOutputSchema},
  prompt: `You are a service that provides direct download links for YouTube videos.

  The user will provide a YouTube video ID. Your task is to use the getVideoDownloadLink tool to get a direct download link for the video and return it to the user.

  User Input: {{{videoId}}}
  `,
});

const generateDownloadLinkFlow = ai.defineFlow({
  name: 'generateDownloadLinkFlow',
  inputSchema: GenerateDownloadLinkInputSchema,
  outputSchema: GenerateDownloadLinkOutputSchema,
}, async (input) => {
  const {output} = await prompt(input);
  return output!;
});
