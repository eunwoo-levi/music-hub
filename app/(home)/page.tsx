import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";
import PlayListCarousel from "@/components/PlayListCarousel";
import UserIcon from "@/components/UserIcon";
import { dummyPlaylistArray, getPlaylistById } from "@/lib/dummyData";

export default async function HomePage() {
  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [await getPlaylistById(1)];
  const dummyPlaylistArray3 = [await getPlaylistById(2)];
  const dummyPlaylistArray4 = [await getPlaylistById(3)];

  return (
    <PagePadding>
      <div className="min-h-[600px]">
        <div className="mt-9">
          <Category />
          <div className="mt-20">
            <PlayListCarousel
              title="다시 듣기"
              Thumbnail={
                <div className="w-[56px] h-[56px]">
                  <UserIcon size="lg" />
                </div>
              }
              playlistArray={[...dummyPlaylistArray1]}
              subTitle="은우"
            />
          </div>
          <div className="mt-20">
            <PlayListCarousel
              title="BTS - Butter"
              playlistArray={[...dummyPlaylistArray2]}
              subTitle="새로운 앨범"
            />
          </div>
          <div className="mt-20">
            <PlayListCarousel
              title="커뮤니티 제공"
              playlistArray={[...dummyPlaylistArray3]}
            />
          </div>
          <div className="mt-20">
            <PlayListCarousel
              title="커버 및 리믹스"
              playlistArray={[...dummyPlaylistArray4]}
            />
          </div>
        </div>
      </div>
    </PagePadding>
  );
}
