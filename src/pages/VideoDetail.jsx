import React from "react";
import { useLocation } from 'react-router-dom';
import ChannelInfo from "../components/ChannelInfo";
import ChannelPlaylist from '../components/ChannelPlaylist';

export default function VideoDetail() {
  const {
    state: { video }
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;

  console.log(video);

  return (
    <section className="flex flex-col lg:flex-row p-2">
      <article className="basis-4/6">
        <iframe 
          className="rounded-xl mb-4" 
          id="player" 
          type="text/html" 
          width="100%" 
          height="640" 
          src={`https://www.youtube.com/embed/${video.id}`} 
          frameborder="0"
          title={title}
        >
        </iframe>

        <div className="pt-8 pb-8">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>

      <article className="basis-2/6">
        <ChannelPlaylist id={channelId} />
      </article>
    </section>
  )
}