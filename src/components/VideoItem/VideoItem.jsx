import React, { memo } from "react";
import styles from "./VideoItem.module.css";

const VideoItem = memo(({ video, handleSelectVideo, display }) => {
  const displayType =
    display === "detail"
      ? `${styles["video-item"]} ${styles["video-item--detail"]}`
      : `${styles["video-item"]}`;

  const onClick = () => {
    handleSelectVideo(video);
  };

  return (
    <li className={displayType} onClick={onClick}>
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
});

export default VideoItem;
