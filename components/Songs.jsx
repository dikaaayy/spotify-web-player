import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";
import { ClockIcon } from "@heroicons/react/outline";

export default function Songs() {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className="songs-container relative">
      <div className="grid md:grid-cols-5 items-center pt-6 pb-2 pl-4 text-[#B3B3B3] text-xs font-semibold sticky top-0 bg-[#121212] border-b-[1px] border-[#626262]">
        <div className="flex gap-x-9">
          <p>#</p>
          <p>TITLE</p>
        </div>
        <p className="invisible">TITLE</p>
        <p>ALBUM</p>
        <p className="ml-8 hidden md:block">DATE ADDED</p>
        <ClockIcon className="w-5 h-5 justify-self-end mr-5 hidden md:block" />
      </div>
      {playlist?.tracks.items.map((item, i) => {
        return (
          <div key={item?.track?.id}>
            <Song order={i} key={item?.track?.id} item={item} />
          </div>
        );
      })}
    </div>
  );
}
