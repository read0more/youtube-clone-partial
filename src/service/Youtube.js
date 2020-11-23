import request from "./request";
import { Html5Entities } from "html-entities";

class Youtube {
  BASE_URL = "https://content-youtube.googleapis.com/youtube/v3";

  constructor(key) {
    this.htmlEntities = new Html5Entities();
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      // redirect: "follow",
    };
  }

  getExtractIdFromVideo(video) {
    // search API의 경우 video id가 객체 안에 있으므로 추출
    if (video.id?.videoId) {
      return video.id.videoId;
    }

    return video.id;
  }

  getHtmlEntitiesDecodeSnippet = (snippet) => {
    let { title, channelTitle, description } = snippet;
    title = this.htmlEntities.decode(title);
    channelTitle = this.htmlEntities.decode(channelTitle);
    description = this.htmlEntities.decode(description);

    return { ...snippet, title, channelTitle, description };
  };

  convertSearchVideos = ({ items: videos }) => {
    return videos.map((video) => {
      video.id = this.getExtractIdFromVideo(video);
      video.snippet = this.getHtmlEntitiesDecodeSnippet(video.snippet);

      return video;
    });
  };

  async getVideosByTerm(term) {
    const videos = await request.get(
      `${this.BASE_URL}/search?part=snippet&maxResults=25&q=${term}&type=video&key=${this.key}`
    );

    videos.items = this.convertSearchVideos(videos);
    return videos;
  }

  async getMostPopularVideos() {
    return await request.get(
      `${this.BASE_URL}/videos?chart=mostPopular&part=snippet&maxResults=25&key=${this.key}`
    );
  }

  async getRelatedVideosById(id) {
    const videos = await request.get(
      `${this.BASE_URL}/search?part=snippet&relatedToVideoId=${id}&type=video&key=${this.key}`
    );

    videos.items = this.convertSearchVideos(videos);
    return videos;
  }
}

export default Youtube;
