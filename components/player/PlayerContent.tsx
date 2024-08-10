import { PlayerSlider } from "../ui/PlayerSlider";

export default function PlayerContent() {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-[-16px] w-full">
        <PlayerSlider />
      </div>
    </div>
  );
}
