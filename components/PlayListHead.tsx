"use client";

import { Song } from "@/types";
import IconButton from "./elements/IconButton";
import { FiFolderPlus, FiMoreVertical, FiPlay } from "react-icons/fi";
import Image from "next/image";
import { getRandomElementArray } from "@/lib/utils";
import WhiteButton from "./elements/WhiteButton";
import DarkButton from "./elements/DarkButton";
import { usePlayerState } from "@/hooks/usePlayerState";

interface PlayListHeadProps {
  playlist: {
    playlistName: string;
    owner: string;
    songList: Song[];
  };
}

export default function PlayListHead({ playlist }: PlayListHeadProps) {
  const { playlistName, owner, songList } = playlist;

  const randomSong = getRandomElementArray(songList);

  const { addSongList } = usePlayerState();

  const onClickPlay = () => {
    addSongList(songList);
  };

  return (
    <section>
      <div className="flex gap-[50px] flex-row">
        <div className="relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]">
          <Image fill src={randomSong?.imageSrc} alt="songImg" />
        </div>
        <article className="flex flex-col justify-between">
          <div className="font-bold text-[28px]">{playlistName}</div>
          <div className="text-neutral-400 mt-4 text-[14px]">
            <div>{`앨범 • ${owner} • 2019`}</div>
            <div>{`${songList.length}곡 • 15분`}</div>
          </div>
          <ul className="hidden lg:flex flex-row gap-4 mt-4">
            <WhiteButton
              onClick={onClickPlay}
              className={"w-[85px] text-[14px]"}
              icon={<FiPlay />}
              label="재생"
            />
            <DarkButton
              className={"w-[150px] text-[14px]"}
              icon={<FiFolderPlus />}
              label="보관함에 저장"
            />
            <IconButton icon={<FiMoreVertical size={24} />} />
          </ul>
        </article>
      </div>
      <ul className="flex flex-row gap-4 mt-4 lg:hidden">
        <WhiteButton
          onClick={onClickPlay}
          className={"w-[85px] text-[14px]"}
          icon={<FiPlay />}
          label="재생"
        />
        <DarkButton
          className={"w-[150px] text-[14px]"}
          icon={<FiFolderPlus />}
          label="보관함에 저장"
        />
        <IconButton icon={<FiMoreVertical size={24} />} />
      </ul>
    </section>
  );
}
