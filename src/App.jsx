import React, { useEffect, useState, useCallback } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SearchResults from "./components/SearchResults/SearchResults";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import { getMostPopularVideos, getVideosByTerm } from "./api/youtubeApi";
import { getHtmlEntitiesDecodeVideos } from "./utils";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);

  useEffect(() => {
    (async () => {
      const { items } = await getMostPopularVideos();
      setVideos(getHtmlEntitiesDecodeVideos(items));
    })();
  }, []);

  const handleBackHome = useCallback(() => {
    setselectedVideo(null);
  }, []);

  const handleSearch = useCallback(() => {
    (async (term) => {
      setVideos([]);
      handleBackHome();
      const { items } = await getVideosByTerm(term);
      setVideos(getHtmlEntitiesDecodeVideos(items));
    })();
  }, [handleBackHome]);

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
        />
      ) : (
        <SearchResults videos={videos} handleSelectVideo={handleSelectVideo} />
      )}
    </main>
  );
}

export default App;
