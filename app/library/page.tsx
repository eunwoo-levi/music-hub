import PagePadding from "@/components/PagePadding";
import Category from "./components/Category";
import PlayListCard from "@/components/PlayListCard";
import { getRandomElementArray } from "@/lib/utils";
import { dummyPlaylistArray } from "@/lib/dummyData";

export default function LibraryPage() {
  return (
    <PagePadding>
      <div className="mt-9">
        <Category />
      </div>
      <div className="mt-12"></div>
      <section className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-6 ">
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
        <PlayListCard playlist={getRandomElementArray(dummyPlaylistArray)} />
      </section>
      <div className="mt-12"></div>
    </PagePadding>
  );
}
