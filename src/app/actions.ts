'use server';

import { z } from 'zod';

const formSchema = z.object({
  videoId: z.string().min(1, 'Video ID cannot be empty.'),
});

export type FormState = {
  message: string;
  data?: {
    thumbnails: {
        resolution: string;
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

export async function getThumbnailData(
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
  
  const rawVideoId = validatedFields.data.videoId.trim();
  const videoId = extractVideoId(rawVideoId);

  if (!videoId) {
    return {
      message: 'Invalid YouTube URL or Video ID. Please check the input and try again.',
      errors: { videoId: ['Invalid YouTube URL or Video ID.'] },
    };
  }

  const thumbnailSizes = [
      { resolution: 'Max Resolution', url: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` },
      { resolution: 'Standard', url: `https://img.youtube.com/vi/${videoId}/sddefault.jpg` },
      { resolution: 'High', url: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` },
      { resolution: 'Medium', url: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` },
      { resolution: 'Default', url: `https://img.youtube.com/vi/${videoId}/default.jpg` },
  ];

  return {
    message: 'Success',
    data: {
      thumbnails: thumbnailSizes,
    },
  };
}
