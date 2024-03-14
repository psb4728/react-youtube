import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from '@tanstack/react-query';
import VideoCard from "./VideoCard";

export default function ChannelPlaylist({ id }) {
  const { youtube } = useYoutubeApi();
  const { isLoading, error, data: videos } = useQuery({
    queryKey: ['playlist', id],
    queryFn: () => { return youtube.searchByChannelId(id)}
  })

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Someting if wrong</p>}

      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type='list' />
          ))}
        </ul>
      )}
    </>
  )
}