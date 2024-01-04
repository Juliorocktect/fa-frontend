import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Search from "./search/Search";
import Profile from "./profile/Profile";
import Player from "./player/Player";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Upload from "./upload/Upload";
import Dashboard from "./dashboard/Dashboard";
import TrendsNew from "../components/trendsNew/TrendsNew";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:query" element={<Search />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/profile/:query" element={<Profile />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/player" element={<Player />}></Route>
        <Route path="/player/:query" element={<Player />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
