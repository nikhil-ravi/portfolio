import { currentlyPlayingSong } from "@/lib/spotify";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const response = await currentlyPlayingSong();
  if (response.status === 204 || response.status > 400) {
    return new Response(JSON.stringify({ isPlaying: false }));
  }

  const song = await response.json();

  const data = {
    isPlaying: song.is_playing,
    title: song.item.name,
    artist: song.item.artists.map((_artist) => _artist.name).join(", "),
    album: song.item.album.name,
    albumImageUrl: song.item.album.images[0].url,
    songUrl: song.item.external_urls.spotify,
  };

  return NextResponse.json(data);
}
