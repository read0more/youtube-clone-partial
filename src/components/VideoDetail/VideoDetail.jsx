import React, { useEffect, useState } from "react";
import VideoItem from "../VideoItem/VideoItem";
import styles from "./VideoDetail.module.css";
import YoutubeVideo from "./YoutubeVideo";
import Loader from "../Loader/Loader";

const VideoDetail = ({ video, handleSelectVideo, youtube }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const { items } = await youtube.getRelatedVideosById(video.id);
      setRelatedVideos(items);
    })();
  }, [video, youtube]);

  return relatedVideos?.length ? (
    <section className={styles.section}>
      <article className={styles.article}>
        <YoutubeVideo video={video} />
      </article>
      <aside>
        <ul className={styles["related-videos"]}>
          {relatedVideos?.map?.((relatedVideo) => (
            <VideoItem
              key={relatedVideo.id}
              video={relatedVideo}
              handleSelectVideo={handleSelectVideo}
              display="detail"
            />
          ))}
        </ul>
      </aside>
    </section>
  ) : (
    <Loader />
  );
};

export default VideoDetail;
