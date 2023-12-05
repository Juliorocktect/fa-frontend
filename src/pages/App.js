import "./App.css";
import Navbar from "../components/navbar/Navbar";
import Video from "../components/video/Video";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Search from "./search/Search";
import Profile from "./profile/Profile";
import Account from "./account/Account";
import Player from "./player/Player";
import Login from "./login/Login";
import VideoPlayer from "../components/videoPlayer/VideoPlayer";
import Trends from "../components/trends/Trends";
import Signup from "./signup/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Search />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/profile/:query" element={<Profile />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/player" element={<Player />}></Route>
        <Route path="/player/:query" element={<Player />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/slider" element={<Trends />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
