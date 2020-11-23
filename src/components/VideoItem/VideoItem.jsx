import React from "react";
import styles from "./VideoItem.module.css";

const VideoItem = ({ video, handleSelectVideo }) => {
  const onClick = () => {
    handleSelectVideo(video);
  };

  return (
    <li className={styles["video-item"]} onClick={onClick}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className={styles.metadata}>
        <span className={styles.title}>{video.snippet.title}</span>
        <span className={styles.channelTitle}>
          {video.snippet.channelTitle}
        </span>
      </div>
    </li>
  );
};

export default VideoItem;
