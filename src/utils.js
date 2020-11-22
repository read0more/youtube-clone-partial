// 유튜브에서 받은 video 객체에서 id를 가져올 때 id 또는 id.videoId이기 때문에 구분하기 위해 생성
export const getYoutubeIdFromVideo = (video) => {
  if (typeof video.id === "string") {
    return video.id;
  }

  return video.id.videoId;
};
