import HeaderBgChanger from "@/components/HeaderBgChanger";
import PagePadding from "@/components/PagePadding";
import PlayListHead from "@/components/PlayListHead";
import SongCardRowExpand from "@/components/SongCardRowExpand";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementArray } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";

interface playlistpageProps {
  searchParams: {
    list: string;
  };
}

export default async function playlistpage(props: playlistpageProps) {
  const playlist = await getPlaylistById(Number(props.searchParams.list));

  if (!playlist) {
    permanentRedirect("/");
  }

  const imageSrc = getRandomElementArray(playlist.songList)?.imageSrc;

  return (
    <PagePadding>
      <HeaderBgChanger imageSrc={imageSrc} />
      <div className="mt-12"></div>
      <PlayListHead playlist={playlist} />
      <div className="mt-12"></div>
      <section className="flex flex-col gap-2">
        {playlist.songList.map((song, idx) => (
          <SongCardRowExpand key={idx} song={song} />
        ))}
      </section>
    </PagePadding>
  );
}
