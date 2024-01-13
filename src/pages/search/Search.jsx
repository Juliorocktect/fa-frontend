import React, { useEffect, useState } from "react";
import { ArrowLeft12Filled } from "@fluentui/react-icons";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./Search.css";
import Video from "../../components/video/Video";
import SearchDesk from "../../dekstop/SearchDesk/SearchDesk";
function Search() {
  const navigate = useNavigate();
  const [search,setSearch] = useState();
  const [isAvailable,setAvailable] = useState(false);
  const [searchResult,setSearchResult] = useState(null);
  const [searchParams,setSearchParams] = useSearchParams();
  const [Url,setUrl] = useState(window.location.href);
  useEffect(()=>{
    fetch("http://192.168.178.95:9090/search/video?query=" + searchParams.get("q"))
    .then(response => response.json())
    .then((result) => {
      setSearchResult(result);
      setAvailable(true);
      console.log(result.length)
    })
    .catch(error => console.log('error', error));
  },[])


  useEffect(() => {
    fetch("http://192.168.178.95:9090/search/video?query=" + search)
  .then(response => response.json())
  .then((result) => {
    setSearchResult(result);
    setAvailable(true);
    console.log(result.length)
  })
  .catch(error => console.log('error', error));
  },[search])
  return (
    <>
      <div className="search-head">
        <ArrowLeft12Filled
          className="nav-icon"
          onClick={() => {
            navigate("/");
          }}
        />
        <input type="text" className="search-input" placeholder="Suche..." onChange={(e) => 
        {
          setSearch(e.target.value);
          setSearchParams({q: e.target.value});
        }}/>
      </div>
      <SearchDesk query={searchParams.get("q") } setSearch={setSearch}></SearchDesk>
      <div className="suggestions"></div>
      <div className="video-container-container">
        <div id="video-container" className="video-container">
          {
            isAvailable && (searchResult.map((video) => (
              <Video
                preview={video.thumbnailUrl}
                profile={video.profilePicture}
                title={video.title}
                description={video.description}
                videoId={video.id}
                profileId={video.authorId}
              />
            )))
          }
        </div>
      </div>
    </>
  );
}

export default Search;
