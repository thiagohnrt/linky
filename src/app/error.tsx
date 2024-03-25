"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-auto items-center justify-center dark:bg-neutral-900">
      <div className="flex items-center z-20">
        <div className="md:w-[420px]">
          <h1 className="text-3xl">Something went wrong!!!</h1>
          <div className="my-5">
            There was a problem loading the data. You can try to reload the page
            or try again later.
          </div>
          <Button onClick={() => reset()}>Try again</Button>
        </div>
        <div className="">
          <Image
            src="/error.png"
            alt="Error illustration"
            style={{ animation: "float 3s ease-in-out infinite" }}
            width={200}
            height={200}
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 right-0 z-10 leading-none font-semibold text-[450px]"
        style={{ color: "rgba(100,100,100,0.08)" }}
      >
        500
      </div>
    </div>
  );
}
