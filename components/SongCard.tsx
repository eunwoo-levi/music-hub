"use client";

import { TopSong } from "@/types";
import Image from "next/image";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import {
  FiMoreVertical,
  FiPlayCircle,
  FiThumbsDown,
  FiThumbsUp,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { usePlayerState } from "@/hooks/usePlayerState";

interface SongCardProps {
  song: TopSong;
}

export default function SongCard({ song }: SongCardProps) {
  const { addSongList } = usePlayerState();

  const onClickPlay = () => {
    addSongList([song]);
  };

  return (
    <article className="flex flex-row items-center gap-4 h-[48px] w-full relative group">
      <div className="w-[48px] h-[48px] relative">
        <Image fill src={song.imageSrc} alt="img" className="object-cover" />
        <section
          onClick={onClickPlay}
          className="hidden group-hover:flex absolute top-0 w-[48px] h-[48px] items-center justify-center bg-black bg-opacity-60 cursor-pointer z-10"
        >
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className="flex flex-row items-center gap-4">
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={10} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color="#3CA63F" />
          ) : (
            <AiOutlineCaretDown size={10} color="#FF0000" />
          )}
        </div>
        <div className="group-hover:bg-black group-hover:opacity-20">
          {song.rank + 1}
        </div>
      </div>
      <div className="group-hover:bg-black group-hover:opacity-20">
        <div>{song.name}</div>
      </div>
      <section className="hidden group-hover:flex absolute top-0 right-0 flex-row justify-end items-center h-[48px] w-full">
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
}
