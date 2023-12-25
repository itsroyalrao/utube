import { useSelector } from "react-redux";

function VideoPlayer() {
  const videoID = useSelector((state) => state.currentVideoID);
  return (
    <div>
      <iframe
        className="rounded-xl"
        width="100%"
        height="512px"
        src={`https://www.youtube.com/embed/${videoID}`}
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
