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

function extractVideoId(url: string): string | null {
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname === 'youtu.be') {
      return urlObj.pathname.slice(1);
    }
    if (urlObj.hostname.includes('youtube.com')) {
      const videoId = urlObj.searchParams.get('v');
      if (videoId) {
        return videoId;
      }
    }
    // Handle short URLs or direct IDs
    if (url.length === 11 && !url.includes('.')) {
        return url;
    }
  } catch (e) {
     // Handle cases where the input is not a full URL but just the ID
    if (url.length === 11 && !url.includes('.')) {
        return url;
    }
  }
  return null;
}

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
  
  const rawVideoId = validatedFields.data.videoId.trim();
  const videoId = extractVideoId(rawVideoId);

  if (!videoId) {
    return {
      message: 'Invalid YouTube URL or Video ID. Please check the input and try again.',
      errors: { videoId: ['Invalid YouTube URL or Video ID.'] },
    };
  }

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
