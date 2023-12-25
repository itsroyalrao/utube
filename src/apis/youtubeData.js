import axios from "axios";
import {
  setRelatedVideos,
  setSearchResults,
  setVideoDetails,
} from "../features/youtube/youtubeSlice";

const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

async function youtubeData(dispatch) {
  try {
    const initialResponse = await axios(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=40&key=${apiKey}`
    );

    // const nextPageToken = initialResponse.data.nextPageToken;
    // if (nextPageToken) {
    //   const nextPageResponse = await axios(
    //     `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=${maxResults}&pageToken=${nextPageToken}&key=${apiKey}`
    //   );
    //   console.log("nextPageResponse", nextPageResponse);
    // }

    dispatch(setVideoDetails(initialResponse.data));

    console.log("initialResponse", initialResponse.data);
  } catch (e) {
    console.log(e);
  }
}

async function relatedVideos(dispatch, videoID) {
  try {
    const response = await axios(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&relatedToVideoId=${videoID}&maxResults=40&key=${apiKey}`
    );

    dispatch(setRelatedVideos(response.data));
  } catch (e) {
    console.log(e);
  }
}

const searchVideos = async (query, dispatch) => {
  try {
    const response = await axios(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&q=${query}&maxResults=40&key=${apiKey}`
    );
    dispatch(setSearchResults(response.data));
  } catch (e) {
    console.log(e);
  }
};

export { youtubeData, relatedVideos, searchVideos };
