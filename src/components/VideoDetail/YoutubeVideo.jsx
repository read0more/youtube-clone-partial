import React from "react";
import { getYoutubeIdFromVideo } from "../../utils";
import style from "./YoutubeVideo.module.css";

const YoutubeVideo = ({ video }) => {
  console.log(video);
  const id = getYoutubeIdFromVideo(video);
  return (
    <div className={style["youtube-video"]}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Youtube Player"
      ></iframe>
      <b className={style.title}>{video.snippet.title}</b>
      <b className={style.channelTitle}>{video.snippet.channelTitle}</b>
      <pre className={style.description}>{video.snippet.description}</pre>
    </div>
  );
};

export default YoutubeVideo;
