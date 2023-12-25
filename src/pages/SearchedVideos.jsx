import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { searchVideos } from "../apis/youtubeData";
import { useDispatch, useSelector } from "react-redux";

function SearchedVideos() {
  const { query } = useParams();
  const dispatch = useDispatch();

  const videos = useSelector((state) => state.searchResults);

  useEffect(() => {
    searchVideos(query, dispatch);
  }, [query, dispatch]);
  return (
    <div className="w-full h-[100dvh] flex flex-col overflow-auto">
      <Navbar />
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
  );
}

export default SearchedVideos;
