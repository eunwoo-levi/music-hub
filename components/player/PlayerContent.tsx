"use client";

import {
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoShuffle,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { PlayerSlider } from "../ui/PlayerSlider";
import { useAudio } from "react-use";
import { AiFillCaretUp, AiOutlinePause } from "react-icons/ai";
import { usePlayerState } from "@/hooks/usePlayerState";
import { ClipLoader } from "react-spinners";
import { RiPlayFill } from "react-icons/ri";
import Image from "next/image";
import { RxLoop } from "react-icons/rx";
import { useCallback, useEffect } from "react";

export default function PlayerContent() {
  const { activeSong, prevPlayerQueue, nextPlayerQueue, playBack, playNext } =
    usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src ?? "",
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  const onClickPreBtn = () => {
    if (state.playing && state.time > 10) {
      controls.seek(0);
      return;
    }
    if (prevPlayerQueue.length === 0) return;

    playBack();
  };
  const onClickStartBtn = () => {
    if (activeSong) {
      controls.play();
    } else {
      playNext();
    }
  };
  const onClickPauseBtn = () => {
    controls.pause();
  };
  const onClickNextBtn = useCallback(() => {
    if (nextPlayerQueue.length === 0) {
      controls.pause();
    } else {
      playNext();
    }
  }, [controls, playNext, nextPlayerQueue]);

  useEffect(() => {
    const refAudio = ref.current;
    refAudio?.addEventListener("ended", onClickNextBtn);
    return () => {
      refAudio?.removeEventListener("ended", onClickNextBtn);
    };
  }, [ref]);

  return (
    <div className="w-full h-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value) => {
            controls.seek(value[0]);
          }}
          max={state.duration}
        />
      </div>
      {audio}
      <section className="flex flex-row justify-between items-center w-full h-full px-2 lg:px-6">
        <div className="flex flex-row items-center h-full gap-1 lg:gap-8">
          <IoPlaySkipBackSharp
            size={40}
            className="cursor-pointer"
            onClick={onClickPreBtn}
          />
          {isLoading ? (
            <ClipLoader color="#FFF" />
          ) : state.playing ? (
            <AiOutlinePause
              size={40}
              className="cursor-pointer"
              onClick={onClickPauseBtn}
            />
          ) : (
            <RiPlayFill
              size={40}
              className="cursor-pointer"
              onClick={onClickStartBtn}
            />
          )}
          <IoPlaySkipForwardSharp
            size={40}
            className="cursor-pointer"
            onClick={onClickNextBtn}
          />
        </div>
        <article className=" flex flex-row gap-4 items-center">
          <div className="relative w-[40px] h-[40px]">
            <Image
              fill
              className="object-cover "
              src={activeSong?.imageSrc as string}
              alt="img"
            />
          </div>
          <div className="flex flex-col">
            <div>{activeSong?.name}</div>
            <div className="text-neutral-500 text-[14px]">
              {activeSong?.channel} • 조회수 7.8만회 • 좋아요 1.7천개
            </div>
          </div>
        </article>
        <div className="flex flex-row gap-2">
          <div className="hidden lg:flex flex-row gap-2">
            <IoVolumeHighOutline size={24} className="cursor-pointer" />
            <IoShuffle size={24} className="cursor-pointer" />
            <RxLoop size={24} className="cursor-pointer" />
          </div>
          <div>
            <AiFillCaretUp size={24} className="cursor-pointer" />
          </div>
        </div>
      </section>
    </div>
  );
}
