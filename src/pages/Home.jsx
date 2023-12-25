import { useDispatch } from "react-redux";
import { youtubeData } from "../apis/youtubeData";
import VideoCard from "../components/VideoCard";
import Navbar from "../components/Navbar";

function Home() {
  const dispatch = useDispatch();
  youtubeData(dispatch);

  return (
    <div className="w-full h-[100svh] flex flex-col overflow-auto">
      <Navbar />
      <div className="">
        <VideoCard />
      </div>
    </div>
  );
}

export default Home;
