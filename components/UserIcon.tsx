import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function UserIcon({ size = "sm" }) {
  return (
    <Avatar
      className={cn("w-[26px] h-[26px]", size === "lg" && "w-[56px] h-[56px]")}
    >
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
