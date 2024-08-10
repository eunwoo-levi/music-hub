"use client";

import { Song } from "@/types";
import Image from "next/image";
import {
  FiMoreVertical,
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { useRouter } from "next/navigation";

interface SongCardRowExpandProps {
  song: Song;
}

export default function SongCardRowExpand({ song }: SongCardRowExpandProps) {
  const { channel, channelId } = song;
  const { push } = useRouter();

  const onClickChannel = () => {
    push(`/channel/${channelId}`);
  };

  return (
    <article className="flex flex-row items-center gap-4 h-[48px] w-full relative group">
      <div className="w-[48px] h-[48px] relative">
        <Image fill src={song.imageSrc} alt="img" className="object-cover" />
        <section className="hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black bg-opacity-60 cursor-pointer">
          <FiPlayCircle size={20} />
        </section>
      </div>

      <div className="flex flex-row gap-4 justify-between basis-1/3">
        <div className="w-[130px] truncate">{song.name}</div>
        <div
          onClick={onClickChannel}
          className="text-neutral-300 hover:underline cursor-pointer"
        >
          {channel}
        </div>
      </div>
      <section className="hidden group-hover:flex absolute top-0 right-0 flex-row justify-end items-center h-[48px] w-[120px]">
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
}
