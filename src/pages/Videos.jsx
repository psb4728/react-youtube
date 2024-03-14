import React from "react";
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from "../components/VideoCard";
import Youtube from "../api/youtube";
import FakeYoutube from "../api/fakeYoutubeClient";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const {keyword} = useParams();
  const { youtube } = useYoutubeApi();
  
  const {isLoading, error, data: videos} = useQuery({
    queryKey: ['videos', keyword],
    queryFn: () => { return youtube.search(keyword) }
    // queryFn: () => {
    //   const youtube = new FakeYoutube();
    //   return youtube.search(keyword);
    // }
  })
  return (
    <>
      <div>videos {keyword ? `🍳${keyword}` : '💥'}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Someting if wrong</p>}

      {videos && 
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y4 p-2">
          { videos.map((video) => <VideoCard key={video.id} video={video} />)}
        </ul>
      }
    </>
  )
}