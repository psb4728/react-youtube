import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from '@tanstack/react-query';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({
    queryKey: ['channels', id],
    queryFn: () => { return youtube.channelImageURL(id)}
  });
  return (
    <div className="flex my-4 mb-8 items-center">
      {url && <img className="w-10 h-10 rounded-full" src={url} alt={name}></img>}
      <p className="text-lg font-medium">{name}</p>
    </div>
  )
}