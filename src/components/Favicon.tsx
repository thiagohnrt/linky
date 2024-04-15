"use client";

import { useState } from "react";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";
import { Bookmark } from "@/interfaces/Bookmark";
import { generateColor } from "@/services/generateColor";

interface FaviconProps {
  bookmark: Bookmark;
  size?: number;
  className?: string;
}

export default function Favicon({
  bookmark,
  size = 16,
  className = "",
}: FaviconProps) {
  const [hasError, setError] = useState(false);
  return (
    <>
      {hasError ? (
        <Avatar bookmark={bookmark} size={size} className={className} />
      ) : (
        <Image
          src={"http://www.google.com/s2/favicons?domain=" + bookmark.url}
          alt="Favicon"
          width={size}
          height={size}
          className={className}
          onLoad={() => setError(false)}
          onError={() => setError(true)}
        />
      )}
    </>
  );
}

function Avatar({ bookmark, size = 16, className = "" }: FaviconProps) {
  const char = bookmark.name.charAt(0);
  const [background, color] = generateColor(char);
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        fontSize: size - 2,
        lineHeight: `${size - 2}px`,
        textAlign: "center",
        background,
        color,
      }}
    >
      {char}
    </div>
  );
}
