'use server';

import { z } from 'zod';
import { processVideoId } from '@/ai/flows/process-video-id';

const formSchema = z.object({
  videoId: z.string().min(1, 'Video ID cannot be empty.'),
});

export type FormState = {
  message: string;
  data?: {
    staticPreviewUrl: string;
    videoDownloadUrl:string;
  };
  errors?: {
    videoId?: string[];
  }
};

export async function getVidSyncData(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = formSchema.safeParse({
    videoId: formData.get('videoId'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.videoId?.[0] || 'Invalid input.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const videoId = validatedFields.data.videoId.trim();

  try {
    const result = await processVideoId({ videoId });
    if (result.staticPreviewUrl && result.videoDownloadUrl) {
      return {
        message: 'Success',
        data: result,
      };
    } else {
      return { message: 'Failed to retrieve video data. Please check the video ID and try again.' };
    }
  } catch (error) {
    console.error('Error in getVidSyncData action:', error);
    return { message: 'An unexpected server error occurred. Please try again later.' };
  }
}
