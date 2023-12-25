import { nanoid } from "@reduxjs/toolkit";

const videoDetails = (state, action) => {
  action.payload.items.forEach((video) => {
    const videoData = {
      id: nanoid(),
      videoID: video.id,
      imageURL: video.snippet.thumbnails.maxres
        ? video.snippet.thumbnails.maxres.url
        : video.snippet.thumbnails.default.url,
      title: video.snippet.title,
    };

    state.videos.push(videoData);
    state.nextPageToken = action.payload.nextPageToken;
    state.pageInfo = {
      totalResults: action.payload.pageInfo.totalResults,
      resultsPerPage: action.payload.pageInfo.resultsPerPage,
    };
  });
};

const currentVideo = (state, action) => {
  state.currentVideoID = action.payload;
};

const relatedVideos = (state, action) => {
  action.payload.items.forEach((video) => {
    const relatedVideoData = {
      id: nanoid(),
      videoID: video.id,
      imageURL: video.snippet.thumbnails.maxres
        ? video.snippet.thumbnails.maxres.url
        : video.snippet.thumbnails.default.url,
      title: video.snippet.title,
    };

    state.relatedVideos.push(relatedVideoData);
    state.nextPageToken = action.payload.nextPageToken;
  });
};

const searchedVideos = (state, action) => {
  action.payload.items.forEach((video) => {
    const searchedVideosData = {
      id: nanoid(),
      videoID: video.id,
      imageURL: video.snippet.thumbnails.maxres
        ? video.snippet.thumbnails.maxres.url
        : video.snippet.thumbnails.default.url,
      title: video.snippet.title,
    };

    state.searchResults.push(searchedVideosData);
    state.nextPageToken = action.payload.nextPageToken;
  });
};

export { videoDetails, currentVideo, relatedVideos, searchedVideos };
