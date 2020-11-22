import React, { memo } from "react";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import styles from "./SearchList.module.css";
import { getYoutubeIdFromVideo } from "../../utils";

const SearchList = memo(({ videos, handleSelectVideo }) => {
  return (
    <section className={styles.searchList}>
      {videos.length ? (
        videos.map?.((video) => (
          <Card
            key={getYoutubeIdFromVideo(video)}
            video={video}
            handleSelectVideo={handleSelectVideo}
          />
        ))
      ) : (
        <Loader />
      )}
    </section>
  );
});

export default SearchList;
