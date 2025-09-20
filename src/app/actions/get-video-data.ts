'use server';

import { z } from 'zod';
import { getVideoInfo } from '@/ai/flows/get-video-info';

const formSchema = z.object({
  videoId: z.string().min(1, 'Video ID cannot be empty.'),
});

export type VideoFormState = {
  message: string;
  data?: {
    title: string;
    thumbnailUrl: string;
    formats: {
      quality: string;
      url: string;
    }[];
  };
  errors?: {
    videoId?: string[];
  }
};

export async function getVideoData(
  prevState: VideoFormState,
  formData: FormData
): Promise<VideoFormState> {
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
    const result = await getVideoInfo({ videoId });
    if (result.title && result.thumbnailUrl && result.formats.length > 0) {
      return {
        message: 'Success',
        data: result,
      };
    } else {
      return { message: 'Failed to retrieve video data. Please check the video ID and try again.' };
    }
  } catch (error) {
    console.error('Error in getVideoData action:', error);
    return { message: 'An unexpected server error occurred. Please try again later.' };
  }
}
