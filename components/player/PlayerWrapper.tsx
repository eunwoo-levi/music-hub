"use client";

import { usePlayerState } from "@/hooks/usePlayerState";
import PlayerContent from "./PlayerContent";

export default function PlayerWrapper() {
  const { isVisiblePlayer } = usePlayerState();

  if (!isVisiblePlayer) return null;
  return (
    <div className="fixed bottom-0 w-full h-[472px] bg-neutral-900">
      <PlayerContent />
    </div>
  );
}
