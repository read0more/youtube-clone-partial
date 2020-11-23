import request from "./request";

const KEY = "AIzaSyCGhqIKBYcbGsvxoXsXgBGPJseqqp4JKj4";
const BASE_URL = "https://content-youtube.googleapis.com/youtube/v3";

export const getVideosByTerm = async (term) =>
  await request.get(
    `${BASE_URL}/search?part=snippet&maxResults=25&q=${term}&type=video&key=${KEY}`
  );

export const getMostPopularVideos = async () =>
  await request.get(
    `${BASE_URL}/videos?chart=mostPopular&part=snippet&maxResults=25&key=${KEY}`
  );

export const getRelatedVideosById = async (id) =>
  await request.get(
    `${BASE_URL}/search?part=snippet&relatedToVideoId=${id}&type=video&key=${KEY}`
  );
