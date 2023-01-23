import { SiSpotify } from "react-icons/si";

export default function NotPlaying() {
  return (
    <div className="flex items-center gap-2 flex-row-reverse sm:flex-row justify-between sm:justify-start">
      <SiSpotify className="w-6 h-6" />
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
        <div className="font-semibold md:text-lg text-black dark:text-white">
          Not Playing
        </div>
        <span className="hidden md:inline-flex">—</span>
        <p className="text-gray-500 text-xs sm:text-sm">Spotify</p>
      </div>
    </div>
  );
}
