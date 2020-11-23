import { useEffect, useState } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SearchList from "./components/SearchList/SearchList";
import VideoDetail from "./components/VideoDetail/VideoDetail";
import { getMostPopularVideos, getVideosByTerm } from "./api/youtubeApi";
import { getHtmlEntitiesDecodeVideos } from "./utils";

function App() {
  const [term, setTerm] = useState("");
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setselectedVideo] = useState(null);

  useEffect(() => {
    (async () => {
      const { items } = await getMostPopularVideos();
      console.log("초기", items);
      setVideos(getHtmlEntitiesDecodeVideos(items));
    })();
  }, []);

  const handleSearch = async (term) => {
    setVideos([]);
    handleBackHome();
    setTerm(term);
    const { items } = await getVideosByTerm(term);
    setVideos(getHtmlEntitiesDecodeVideos(items));
  };

  const handleBackHome = () => {
    setselectedVideo(null);
  };

  const handleSelectVideo = (video) => {
    setselectedVideo(video);
  };

  return (
    <main className={styles.container}>
      <Header handleSearch={handleSearch} handleBackHome={handleBackHome} />
      {selectedVideo ? (
        <VideoDetail
          video={selectedVideo}
          handleSelectVideo={handleSelectVideo}
        />
      ) : (
        <SearchList videos={videos} handleSelectVideo={handleSelectVideo} />
      )}
    </main>
  );
}

export default App;
