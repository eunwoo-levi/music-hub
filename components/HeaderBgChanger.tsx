"use client";

import { useUIState } from "@/hooks/useUIState";
import { useEffect } from "react";

interface HeaderBgChangerProps {
  imageSrc: string;
}

export default function HeaderBgChanger({ imageSrc }: HeaderBgChangerProps) {
  const { setHeaderImageSrc } = useUIState();
  useEffect(() => {
    if (imageSrc) {
      setHeaderImageSrc(imageSrc);
    }
  }, [imageSrc]);

  return <div></div>;
}
