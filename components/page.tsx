import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";
import { getAllPlaylist, getSongListTop10 } from "@/lib/dummyData";
import PlayListCarousel from "@/components/PlayListCarousel";
import SongListCarousel from "@/components/SongListCarousel";

export default async function ExplorePage() {
  /*
  const playlistArray = await getAllPlaylist();
  const songListTop10 = await getSongListTop10();
  */

  const [playlistArray, songListTop10] = await Promise.all([
    getAllPlaylist(),
    getSongListTop10(),
  ]);

  return (
    <PagePadding>
      <div className="mt-4">
        <Category />
      </div>
      <div className="mt-20">
        <PlayListCarousel
          title="새 앨범 및 싱글"
          playlistArray={playlistArray}
        />
      </div>
      <div className="mt-20">
        <SongListCarousel title="인기곡" songListTop10={songListTop10} />
      </div>
      <div className="mt-20"></div>
      <div className="mt-20"></div>
    </PagePadding>
  );
}
