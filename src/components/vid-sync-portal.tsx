"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Download, Link as LinkIcon, Loader2 } from "lucide-react";

import { getVidSyncData, FormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const YoutubeIcon = () => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7 text-primary"
    fill="currentColor"
  >
    <title>VidSync Portal</title>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const initialState: FormState = {
  message: "",
};

function VidSyncFormContent({ data }: { data?: FormState["data"] }) {
  const { pending } = useFormStatus();

  return (
    <>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="videoId" className="sr-only">
              Video ID
            </Label>
            <div className="relative flex items-center">
              <LinkIcon
                className="absolute left-3 h-5 w-5 text-muted-foreground"
                aria-hidden="true"
              />
              <Input
                id="videoId"
                name="videoId"
                type="text"
                placeholder="e.g., dQw4w9WgXcQ"
                required
                className="pl-10 text-base"
                disabled={pending}
              />
            </div>
          </div>
          <Button type="submit" className="w-full text-base py-6" disabled={pending}>
            {pending ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Fetching...
              </>
            ) : (
              "Fetch Video"
            )}
          </Button>
        </div>
      </CardContent>

      {(pending || data) && (
        <div
          className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          data-state={pending || data ? "open" : "closed"}
        >
          <Separator />
          <CardFooter className="flex flex-col items-center gap-6 p-6">
            {pending && (
              <div className="w-full space-y-3">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="aspect-video w-full" />
                <Skeleton className="h-10 w-full" />
              </div>
            )}
            {!pending && data && (
              <div className="w-full space-y-4">
                <div className="w-full space-y-2">
                  <h3 className="text-lg font-semibold leading-none tracking-tight">
                    Preview
                  </h3>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border-2 border-primary/20 shadow-lg">
                    <Image
                      src={data.staticPreviewUrl}
                      alt="Video Preview"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base font-bold py-6">
                  <a href={data.videoDownloadUrl} download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Video
                  </a>
                </Button>
              </div>
            )}
          </CardFooter>
        </div>
      )}
    </>
  );
}

export function VidSyncPortal() {
  const [state, formAction] = useFormState(getVidSyncData, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!state.message) return;

    if (state.message === "Success") {
      formRef.current?.reset();
    } else {
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <Card className="w-full max-w-lg overflow-hidden rounded-xl shadow-2xl bg-card">
      <CardHeader className="p-6">
        <div className="flex items-center gap-3">
          <YoutubeIcon />
          <CardTitle className="font-headline text-3xl tracking-tight">
            VidSync Portal
          </CardTitle>
        </div>
        <CardDescription className="pt-2 text-base">
          Enter a YouTube video ID to instantly acquire its static preview and a
          direct download link.
        </CardDescription>
      </CardHeader>
      <form ref={formRef} action={formAction}>
        <VidSyncFormContent data={state.data} />
      </form>
    </Card>
  );
}
