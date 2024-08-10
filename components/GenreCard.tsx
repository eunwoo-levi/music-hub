import { generateRandomHex } from "@/lib/utils";

export default function GenreCard({ genre }: { genre: string }) {
  const hex = generateRandomHex();

  return (
    <div className="flex flex-row h-[48px] w-full bg-neutral-800 rounded-r-lg">
      <div
        className="h-full w-2 rounded-l-lg"
        style={{ backgroundColor: hex }}
      ></div>
      <div className="flex justify-center items-center px-4">{genre}</div>
    </div>
  );
}
