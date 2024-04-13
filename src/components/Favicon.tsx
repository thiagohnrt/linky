"use client";

import { useState } from "react";
import { GlobeIcon } from "lucide-react";
import Image from "next/image";
import { Bookmark } from "@/interfaces/Bookmark";

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
  return (
    <Image
      src={`/api/favicon?url=${bookmark.url}&title=${bookmark.name}`}
      alt="Favicon"
      width={size}
      height={size}
      className={className}
    />
  );
}
