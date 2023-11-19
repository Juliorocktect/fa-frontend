import "./App.css";
import Navbar from "../components/navbar/Navbar";
import Video from "../components/video/Video";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Search from "./search/Search";
import Profile from "./profile/Profile";
import Account from "./account/Account";
import Player from "./player/Player";

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
      </Routes>
    </>
  );
}

export default App;
