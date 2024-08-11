"use client";

import { cn } from "@/lib/utils";

interface WhiteButtonProps {
  icon?: any;
  label: string;
  className?: any;
  onClick?: () => void;
}

export default function WhiteButton({
  icon = <></>,
  label,
  className = "",
  onClick = () => {},
  ...props
}: WhiteButtonProps) {
  return (
    <div
      onClick={onClick}
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
