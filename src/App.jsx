import React, { useEffect, useState, useCallback } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import VideoDetail from "./components/VideoDetail/VideoDetail";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);

  useEffect(() => {
    (async () => {
      const { items } = await youtube.getMostPopularVideos();
      setVideos(items);
    })();
  }, [youtube]);

  const handleBackHome = useCallback(() => {
    setselectedVideo(null);
  }, []);

  const handleSearch = useCallback(
    (term) => {
      (async () => {
        setVideos([]);
        handleBackHome();
        const { items } = await youtube.getVideosByTerm(term);
        setVideos(items);
      })();
    },
    [handleBackHome, youtube]
  );

  const handleSelectVideo = useCallback((video) => {
    setselectedVideo(video);
  }, []);

  return (
    <main className={styles.container}>
      <Header handleSearch={handleSearch} handleBackHome={handleBackHome} />
      {selectedVideo ? (
        <VideoDetail
          video={selectedVideo}
          handleSelectVideo={handleSelectVideo}
          youtube={youtube}
        />
      ) : (
        <SearchResults videos={videos} handleSelectVideo={handleSelectVideo} />
      )}
    </main>
  );
}

export default App;
