import React, { memo } from "react";
import VideoItem from "../VideoItem/VideoItem";
import Loader from "../Loader/Loader";
import styles from "./SearchResults.module.css";
import { getYoutubeIdFromVideo } from "../../utils";

const SearchResults = memo(({ videos, handleSelectVideo }) => {
  return (
    <section>
      {videos.length ? (
        <ul className={styles.SearchResults}>
          {videos.map((video) => (
            <VideoItem
              key={getYoutubeIdFromVideo(video)}
              video={video}
              handleSelectVideo={handleSelectVideo}
            />
          ))}
        </ul>
      ) : (
        <Loader />
      )}
    </section>
  );
});

export default SearchResults;
