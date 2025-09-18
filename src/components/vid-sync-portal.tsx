"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Download, Link as LinkIcon, Loader2, ImageDown } from "lucide-react";

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

  return (
    <div className="w-full max-w-2xl">
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
              "Get Thumbnail"
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
          <CardFooter className="flex flex-col items-center gap-6 p-0">
            {pending && (
              <div className="w-full space-y-3">
                <Skeleton className="h-8 w-1/3" />
                <Skeleton className="aspect-video w-full" />
                <div className="grid grid-cols-1 gap-4">
                  <Skeleton className="h-12 w-full" />
                </div>
              </div>
            )}
            {!pending && data && (
              <div className="w-full space-y-4">
                <div className="w-full space-y-2">
                  <h3 className="text-left text-xl font-semibold leading-none tracking-tight">
                    Thumbnail Preview
                  </h3>
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg border shadow-lg">
                    <Image
                      src={data.staticPreviewUrl}
                      alt="Video Preview"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>
                <div className="grid w-full grid-cols-1 gap-4">
                   <Button asChild variant="outline" size="lg" className="h-12 text-base border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                      <a href={data.staticPreviewUrl} download={`preview.jpg`}>
                        <ImageDown className="mr-2 h-5 w-5" />
                        Download Thumbnail
                      </a>
                    </Button>
                </div>
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

  const videoId = state.data?.staticPreviewUrl.split('/vi/')[1]?.split('/')[0];

  return (
    <Card className="w-full max-w-4xl overflow-hidden rounded-xl border-none bg-transparent shadow-none">
      <form ref={formRef} action={formAction}>
        <VidSyncFormContent data={state.data} />
      </form>
    </Card>
  );
}
