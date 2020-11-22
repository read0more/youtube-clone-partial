import React from "react";
import styles from "./Card.module.css";

const Card = ({ video, handleSelectVideo }) => {
  const onClick = () => {
    handleSelectVideo(video);
  };

  return (
    <figure className={styles.card} onClick={onClick}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <figcaption>
        <span className={styles.title}>{video.snippet.title}</span>
        <span className={styles.channelTitle}>
          {video.snippet.channelTitle}
        </span>
      </figcaption>
    </figure>
  );
};

export default Card;
