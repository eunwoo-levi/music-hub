"use client";

import { usePlayerState } from "@/hooks/usePlayerState";
import { IoMdPlayCircle } from "react-icons/io";

interface songProps {
  name: string;
  channelId: number;
  channel: string;
  src: string;
  imageSrc: string;
}

interface playlistProps {
  playlist: {
    id: number;
    owner: string;
    playlistName: string;
    songList: songProps[];
  };
}

export default function PlayListNav({ playlist }: playlistProps) {
  const { addSongList } = usePlayerState();
  const { owner, playlistName, songList } = playlist;

  const onClickPlay = () => {
    addSongList(songList);
  };

  return (
    <li
      className="mx-3 px-4 h-[56px] flex flex-row justify-between items-center 
      hover:bg-neutral-700 rounded-lg group"
    >
      <div>
        <div className="text-[14px]">{playlistName}</div>
        <div className="text-[12px] text-neutral-500">{owner}</div>
      </div>
      <div>
        <div
          onClick={onClickPlay}
          className="hidden group-hover:block cursor-pointer"
        >
          <IoMdPlayCircle size={30} />
        </div>
      </div>
    </li>
  );
}
