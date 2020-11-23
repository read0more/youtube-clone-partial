import React, { useEffect, useState } from "react";
import VideoItem from "../VideoItem/VideoItem";
import styles from "./VideoDetail.module.css";
import YoutubeVideo from "./YoutubeVideo";
import { getRelatedVideosById } from "../../api/youtubeApi";
import Loader from "../Loader/Loader";
import {
  getYoutubeIdFromVideo,
  getHtmlEntitiesDecodeVideos,
} from "../../utils";

const VideoDetail = ({ video, handleSelectVideo }) => {
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const id = getYoutubeIdFromVideo(video);
      const { items } = await getRelatedVideosById(id);
      setRelatedVideos(getHtmlEntitiesDecodeVideos(items));
    })();
  }, [video]);

  return relatedVideos?.length ? (
    <section className={styles.section}>
      <article className={styles.article}>
        <YoutubeVideo video={video} />
      </article>
      <aside>
        <ul className={styles["related-videos"]}>
          {relatedVideos?.map?.((relatedVideo) => (
            <VideoItem
              key={getYoutubeIdFromVideo(relatedVideo)}
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
