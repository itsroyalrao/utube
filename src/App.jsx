import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SearchedVideos from "./pages/SearchedVideos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:videoID" element={<Video />} />
        <Route path="/search/:query" element={<SearchedVideos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
