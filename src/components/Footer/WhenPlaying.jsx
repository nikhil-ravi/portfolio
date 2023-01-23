import Image from "next/image";
import Link from "next/link";
import { SiSpotify } from "react-icons/si";

export default function WhenPlaying({ song }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold">Now Playing</h4>
      <Link
        href={song.songUrl}
        passHref
        className="flex items-center justify-between bg-gray-200 dark:bg-darkSecondary  p-3 sm:p-4 rounded-sm"
      >
        <div className=" flex items-center gap-2">
          <div className="w-10 h-10">
            <Image
              alt={song.title}
              src={song.albumImageUrl}
              width={40}
              height={40}
              quality={50}
              placeholder="blur"
              blurDataURL={song.albumImageUrl}
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <h3 className="font-semibold md:text-lg text-black dark:text-white animate-">
              {song.title}
            </h3>
            <span className="hidden md:inline-flex">—</span>
            <p className="text-gray-600 text-xs sm:text-sm">{song.artist}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SiSpotify className="w-6 h-6 text-green-500 animate-[spin_2s_linear_infinite]" />
        </div>
      </Link>
    </div>
  );
}
