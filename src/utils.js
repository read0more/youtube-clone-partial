import { Html5Entities } from "html-entities";

// 유튜브에서 받은 video 객체에서 id를 가져올 때 id 또는 id.videoId이기 때문에 구분하기 위해 생성
export const getYoutubeIdFromVideo = (video) => {
  if (typeof video.id === "string") {
    return video.id;
  }

  return video.id.videoId;
};

export const getHtmlEntitiesDecodeVideos = (videos) => {
  if (checkEmpty(videos)) {
    return [];
  }

  const htmlEntities = new Html5Entities();

  return videos.map((video) => {
    video.snippet.title = htmlEntities.decode(video.snippet.title);
    video.snippet.channelTitle = htmlEntities.decode(
      video.snippet.channelTitle
    );
    video.snippet.description = htmlEntities.decode(video.snippet.description);
    return video;
  });
};

const checkEmpty = (target) => {
  if (
    !target ||
    !target.length ||
    JSON.stringify(target) === JSON.stringify({})
  ) {
    return true;
  }

  return false;
};
