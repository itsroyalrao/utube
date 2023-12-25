import { Link, useParams } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentVideo } from "../features/youtube/youtubeSlice";
import { relatedVideos } from "../apis/youtubeData";
import { useEffect } from "react";

function Video() {
  const { videoID } = useParams();

  const dispatch = useDispatch();

  const videos = useSelector((state) => state.relatedVideos);

  useEffect(() => {
    dispatch(setCurrentVideo(videoID));
    relatedVideos(dispatch, videoID);
  }, [videoID, dispatch]);

  return (
    <div className="w-full h-[100dvh] flex flex-col gap-3 overflow-auto">
      <Navbar />
      <div className="flex flex-col px-12">
        <VideoPlayer />
        <div className="p-5 text-xl">Related Videos</div>
        <div className="grid grid-cols-3 gap-x-3 gap-y-5">
          {videos.map((video) => (
            <Link to={`/watch/${video.videoID}`} key={video.id}>
              <img
                className="rounded-xl"
                src={video.imageURL}
                alt={video.title}
              />
              <div className="truncate-text capitalize px-4">{video.title}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Video;
