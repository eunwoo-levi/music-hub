"use client";

import { cn } from "@/lib/utils";

interface WhiteButtonProps {
  icon?: any;
  label: string;
  className?: any;
}

export default function WhiteButton({
  icon = <></>,
  label,
  className = "",
  ...props
}: WhiteButtonProps) {
  return (
    <div
      className={cn(
        "cursor-pointer border border-neutral-600 bg-white hover:bg-neutral-300 text-black rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2",
        className
      )}
      {...props}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </div>
  );
}
