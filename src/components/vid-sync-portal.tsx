
"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Link as LinkIcon, Loader2, ImageDown } from "lucide-react";

import { getThumbnailData, FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const initialState: FormState = {
  message: "",
};

function ThumbnailDownloaderFormContent({ data }: { data?: FormState["data"] }) {
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
    { label: "Max Resolution", resolution: "1280x720", key: "Max Resolution" },
    { label: "Standard Definition", resolution: "640x480", key: "Standard" },
    { label: "High Quality", resolution: "480x360", key: "High" },
    { label: "Medium Quality", resolution: "320x180", key: "Medium" },
    { label: "Default", resolution: "120x90", key: "Default" },
  ]

  const thumbnails = data?.thumbnails ? thumbnailDetails.map(detail => {
    const thumbnailData = data.thumbnails.find(t => t.resolution === detail.key);
    return thumbnailData ? { ...detail, url: thumbnailData.url } : null;
  }).filter(Boolean) as ({ label: string, resolution: string, key: string, url: string }[]) : [];


  return (
    <div className="w-full max-w-4xl mx-auto">
      <CardContent className="mt-8">
        <div className="flex flex-col md:flex-row w-full items-center space-y-2 md:space-y-0 md:space-x-2">
          <div className="relative flex-grow w-full">
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
              className="pl-10 text-base h-12 w-full"
              disabled={pending}
            />
          </div>

          <Button type="submit" className="h-12 bg-blue-600 hover:bg-blue-700 text-white w-full md:w-auto" disabled={pending}>
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
               <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[...Array(3)].map((_, i) => (
                 <div key={i} className="w-full space-y-2 flex flex-col items-center">
                   <Skeleton className="h-6 w-1/2" />
                   <Skeleton className="aspect-video w-full" />
                   <Skeleton className="h-10 w-3/4" />
                 </div>
               ))}
             </div>
            )}
            {!pending && thumbnails.length > 0 && (
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {thumbnails.slice(0, 3).map((thumbnail) => (
                  <div key={thumbnail.key} className="w-full space-y-2 text-center">
                    <h3 className="text-lg font-semibold">
                      {thumbnail.label}
                    </h3>
                     <p className="text-sm text-muted-foreground">({thumbnail.resolution})</p>
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg border shadow-md">
                      <Image
                        src={thumbnail.url}
                        alt={`YouTube Thumbnail ${thumbnail.label} ${thumbnail.resolution}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <Button variant="outline" size="sm" onClick={() => handleDownload(thumbnail.url, thumbnail.resolution)}>
                      <ImageDown className="mr-2 h-4 w-4" />
                      Download Image
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

export function ThumbnailDownloader() {
  const [state, formAction] = useActionState(getThumbnailData, initialState);
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
        <ThumbnailDownloaderFormContent data={state.data} />
      </form>
    </Card>
  );
}
