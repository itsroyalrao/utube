import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function VideoCard() {
  const videos = useSelector((state) => state.videos);
  return (
    <div className="grid grid-cols-3 gap-x-3 gap-y-5 p-5">
      {videos.map((video) => (
        <Link to={`/watch/${video.videoID}`} key={video.id}>
          <img className="rounded-xl" src={video.imageURL} alt={video.title} />
          <div className="truncate-text capitalize px-4">{video.title} </div>
        </Link>
      ))}
    </div>
  );
}

export default VideoCard;
