import React, { useState, useEffect } from "react";
import MovieBox from "../../components/MovieBox/MovieBox";
import img_notfound from "../../assets/notfound.png";
import { AiOutlineSearch } from "react-icons/ai";

import "../../styles.css";

function Main() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState("movie/now_playing");

  const API_URL =
    process.env.REACT_APP_API_URL +
    `/${keyword}?api_key=` +
    process.env.REACT_APP_API_KEY +
    `&page=1`;
  const API_URL2 =
    process.env.REACT_APP_API_URL +
    `/${keyword}?api_key=` +
    process.env.REACT_APP_API_KEY +
    `&page=2`;
  const url =
    process.env.REACT_APP_API_URL +
    `/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;

  const apiCall = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
    fetch(API_URL2)
      .then((res) => res.json())
      .then((data) => {
        setMovies((oldMovies) => [...oldMovies, ...data.results]);
      });
  };

  useEffect(() => {
    apiCall();
  }, [keyword]); //adding useState value to reflect setState synchronously. removing it will make is async and require double clicks.

  const Latest = () => {
    setKeyword("movie/latest");
    apiCall();
    // console.log(keyword);
  };

  const Popular = () => {
    setKeyword("movie/popular");
    apiCall();
    // console.log(keyword);
  };

  const NowPlaying = () => {
    setKeyword("trending/all/day");
    apiCall();
    // console.log(keyword);
  };

  const TopRated = () => {
    setKeyword((keyword) => {
      const modifiedValue = "movie/top_rated";
      // console.log(keyword);
      return modifiedValue;
    });
    apiCall();
    console.log(process.env.REACT_APP_API_KEY);
    console.log(process.env.REACT_APP_API_TOKEN);
    console.log(process.env.REACT_APP_API_URL);
    console.log(process.env.REACT_APP_API_IMAGE);
    console.log(process.env.REACT_APP_API_SEARCH);
    console.log(process.env.REACT_APP_EMAILJS_SERVICE);
    console.log(process.env.REACT_APP_EMAILJS_TEMPLATE);
    console.log(process.env.REACT_APP_MAILJS_API);
  };

  const searchMovie = async (query) => {
    if (query !== "") {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    }
    // else
    // console.log("empty")
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="all">
        <div className="navbar_container">
          <div className="navbar">
            <a onClick={Latest} className="logo">
              Movie++
            </a>
            <a onClick={Popular}>Popular</a>
            <a onClick={NowPlaying}>Now Playing</a>
            <a onClick={TopRated}>Top Rated</a>
          </div>
          <div className="searchbar">
            <input
              autoComplete="off"
              type="search"
              placeholder="Search Movie"
              aria-label="search"
              name="query"
              value={query}
              onChange={changeHandler}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  searchMovie(query);
                }
              }}
            />
            <button onClick={() => searchMovie(query)} type="search">
              <AiOutlineSearch size={25} />
            </button>
          </div>
        </div>
        <div className="main">
          {movies.length > 0 ? (
            <div className="container">
              <div className="grid">
                {movies.map((movieReq) => (
                  <MovieBox key={movieReq.id} {...movieReq} />
                ))}
              </div>
            </div>
          ) : (
            <div className="notfound">
              <img src={img_notfound} alt="hi" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Main;
