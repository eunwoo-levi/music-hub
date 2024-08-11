import { IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from "react-icons/io5";
import { PlayerSlider } from "../ui/PlayerSlider";
import { useAudio } from "react-use";
import { AiOutlinePause } from "react-icons/ai";
import { usePlayerState } from "@/hooks/usePlayerState";
import { ClipLoader } from "react-spinners";
import { RiPlayFill } from "react-icons/ri";

export default function PlayerContent() {
  const { activeSong } = usePlayerState();
  const [audio, state, controls, ref] = useAudio({
    src: activeSong?.src ?? "",
    autoPlay: true,
  });

  const isLoading = activeSong?.src && state.buffered?.length === 0;

  console.log("로딩상태:", isLoading);

  const onClickPreBtn = () => {};
  const onClickStartBtn = () => {
    controls.play();
    console.log("start일때 로딩상태:", isLoading);
  };
  const onClickPauseBtn = () => {
    controls.pause();
    console.log("pause일때 로딩상태:", isLoading);
  };
  const onClickNextBtn = () => {};

  return (
    <div className="w-full h-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider
          className="w-full"
          defaultValue={[0]}
          value={[state.time]}
          onValueChange={(value) => {
            controls.seek(value);
          }}
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
        <article></article>
        <div></div>
      </section>
    </div>
  );
}
