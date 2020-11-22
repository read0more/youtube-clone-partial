import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import styles from "./VideoDetail.module.css";
import YoutubeVideo from "./YoutubeVideo";
import { getRelatedVideosById } from "../../api/youtubeApi";
import Loader from "../Loader/Loader";
import { getYoutubeIdFromVideo } from "../../utils";

const VideoDetail = ({ video, handleSelectVideo }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const id = getYoutubeIdFromVideo(video);
      const { items } = await getRelatedVideosById(id);
      setRelatedVideos(items);
    })();
  }, [video]);

  return relatedVideos?.length ? (
    <section className={styles.section}>
      <article className={styles.article}>
        <YoutubeVideo video={video} />
      </article>
      <aside className={styles.aside}>
        {relatedVideos?.map?.((relatedVideo) => (
          <Card
            key={getYoutubeIdFromVideo(relatedVideo)}
            video={relatedVideo}
            handleSelectVideo={handleSelectVideo}
          />
        ))}
      </aside>
    </section>
  ) : (
    <Loader />
  );
};

export default VideoDetail;
