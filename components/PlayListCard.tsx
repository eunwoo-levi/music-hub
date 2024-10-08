"use client";

import { getRandomElementArray } from "@/lib/utils";
import { Playlist } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiPlay } from "react-icons/fi";
import { MdMoreVert } from "react-icons/md";
import IconButton from "./elements/IconButton";
import { usePlayerState } from "@/hooks/usePlayerState";
import { MouseEvent } from "react";

export default function PlayListCard({ playlist }: { playlist: Playlist }) {
  const { addSongList } = usePlayerState();
  const { id, owner = "", playlistName = "", songList = [] } = playlist;
  const songListLen = songList?.length;
  const imgSrc = getRandomElementArray(songList).imageSrc;
  const { push } = useRouter();

  const onClickCard = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    push(`/playlist?list=${id}`);
  };

  const onClickPlay = () => {
    addSongList(songList);
  };

  return (
    <article className="h-[240px] cursor-pointer group">
      <section onClick={onClickCard} className="relative h-[136px]">
        <Image
          fill
          src={
            imgSrc ||
            "https://bloximages.newyork1.vip.townnews.com/dailytitan.com/content/tncms/assets/v3/editorial/6/3b/63b9ede6-56f6-11ec-b3f2-3fac8e9950df/61aeaeb273317.image.jpg?resize=1333%2C757"
          }
          alt="thumbnail"
          className="object-cover rounded-md"
        />
        <div className="hidden relative group-hover:block bg-gradient-to-b from-[rgba(0,0,0,0.7)] top-0 w-full h-[136px]">
          <div className="absolute top-0 right-4">
            <IconButton icon={<MdMoreVert size={20} />} />
          </div>
          <div
            onClick={onClickPlay}
            className="absolute bottom-4 right-4 flex justify-center items-center transform-gpu transition-transform hover:scale-110 bg-[rgba(0,0,0,0.7)] w-[40px] h-[40px] rounded-full hover:bg-[rgba(0,0,0,0.9) pl-1"
          >
            <FiPlay size={22} color="red" />
          </div>
        </div>
      </section>
      <section className="mt-2">
        <div>{playlistName}</div>
        <div className="text-neutral-500">{`${owner} - 트랙 ${songListLen}개`}</div>
      </section>
    </article>
  );
}
