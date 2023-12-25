import { createSlice } from "@reduxjs/toolkit";
import {
  currentVideo,
  relatedVideos,
  searchedVideos,
  videoDetails,
} from "../../functions/ReducerMethods";

const initialState = {
  videos: [],
  currentVideoID: "",
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  relatedVideos: [],
  pageInfo: {
    totalResults: null,
    resultsPerPage: null,
  },
};

const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    setVideoDetails: (state, action) => videoDetails(state, action),
    setCurrentVideo: (state, action) => currentVideo(state, action),
    setRelatedVideos: (state, action) => relatedVideos(state, action),
    setSearchResults: (state, action) => searchedVideos(state, action),
  },
});

export const {
  setVideoDetails,
  setCurrentVideo,
  setRelatedVideos,
  setSearchResults,
} = youtubeSlice.actions;

export default youtubeSlice.reducer;
