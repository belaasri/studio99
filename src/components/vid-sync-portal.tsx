"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Link as LinkIcon, Loader2, ImageDown } from "lucide-react";

import { getVidSyncData, FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const initialState: FormState = {
  message: "",
};

function VidSyncFormContent({ data }: { data?: FormState["data"] }) {
  const { pending } = useFormStatus();

  const handleDownload = async (url: string, resolution: string) => {
    if (!url) return;
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = `youtube-thumbnail-${resolution}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  const thumbnailDetails = [
    { label: "HD Image", resolution: "1280x720", key: "Max Resolution" },
    { label: "SD Image", resolution: "640x480", key: "Standard" },
    { label: "Normal Image", resolution: "480x360", key: "High" },
    { label: "Normal Image", resolution: "320x180", key: "Medium" },
    { label: "Normal Image", resolution: "120x90", key: "Default" },
  ]

  const thumbnails = data?.thumbnails ? thumbnailDetails.map(detail => {
    const thumbnailData = data.thumbnails.find(t => t.resolution === detail.key);
    return thumbnailData ? { ...detail, url: thumbnailData.url } : null;
  }).filter(Boolean) as ({ label: string, resolution: string, key: string, url: string}[]) : [];


  return (
    <div className="w-full max-w-4xl mx-auto">
      <CardContent className="mt-8">
        <div className="flex w-full items-center space-x-2">
          <div className="relative flex-grow">
             <LinkIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id="videoId"
              name="videoId"
              type="text"
              placeholder="Paste YouTube URL here..."
              required
              className="pl-10 text-base h-12"
              disabled={pending}
            />
          </div>

          <Button type="submit" className="h-12 bg-blue-600 hover:bg-blue-700 text-white" disabled={pending}>
            {pending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Getting...
              </>
            ) : (
              "Get Thumbnail Images"
            )}
          </Button>
        </div>
      </CardContent>

      {(pending || data) && (
        <div
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          data-state={pending || data ? "open" : "closed"}
        >
          <Separator className="my-6" />
          <CardFooter className="flex flex-col items-center gap-8 p-0">
            {pending && (
              <div className="w-full flex flex-col items-center gap-8">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-full max-w-lg space-y-2 flex flex-col items-center">
                    <Skeleton className="h-6 w-1/3" />
                    <Skeleton className="aspect-video w-full" />
                    <Skeleton className="h-6 w-1/2" />
                  </div>
                ))}
              </div>
            )}
            {!pending && thumbnails.length > 0 && (
              <div className="w-full flex flex-col items-center gap-8">
                {thumbnails.map((thumbnail) => (
                    <div key={thumbnail.key} className="w-full max-w-lg space-y-2 text-center">
                        <h3 className="text-lg font-semibold">
                            {thumbnail.label} ({thumbnail.resolution})
                        </h3>
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg border shadow-md">
                            <Image
                                src={thumbnail.url}
                                alt={`YouTube Thumbnail ${thumbnail.label} ${thumbnail.resolution}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <Button variant="link" size="sm" className="text-blue-600 hover:text-blue-800" onClick={() => handleDownload(thumbnail.url, thumbnail.resolution)}>
                            Download {thumbnail.label} Image
                        </Button>
                    </div>
                ))}
              </div>
            )}
          </CardFooter>
        </div>
      )}
    </div>
  );
}

export function VidSyncPortal() {
  const [state, formAction] = useActionState(getVidSyncData, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state.message) return;

    if (state.message !== "Success") {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-7xl overflow-hidden rounded-xl border-none bg-transparent shadow-none">
      <form ref={formRef} action={formAction}>
        <VidSyncFormContent data={state.data} />
      </form>
    </Card>
  );
}
