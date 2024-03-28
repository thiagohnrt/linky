"use client";

import { useState } from "react";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";

interface FaviconProps {
  url: string;
  size?: number;
  className?: string;
}

export default function Favicon({
  url,
  size = 16,
  className = "",
}: FaviconProps) {
  const [isErrorFavicon, setIsErrorFavicon] = useState(false);
  const onErrorFavicon = () => {
    setIsErrorFavicon(true);
  };
  const onLoadFavicon = () => {
    setIsErrorFavicon(false);
  };
  return (
    <>
      {isErrorFavicon ? (
        <GlobeIcon size={size} className={className}></GlobeIcon>
      ) : (
        <Image
          src={"http://www.google.com/s2/favicons?domain=" + url}
          alt="Favicon"
          width={size}
          height={size}
          className={className}
          onLoad={onLoadFavicon}
          onError={onErrorFavicon}
        />
      )}
    </>
  );
}
