import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Header, Footer } from "./components";

import MovieBox from "./components/MovieBox/MovieBox";
import test from "./assets/notfound.png";
import logo from "./assets/logo.png";
import { AiOutlineSearch } from "react-icons/ai";

function App() {
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState("");

  // const [keyword, setKeyword] = useState("movie/popular");
  const [keyword, setKeyword] = useState("trending/all/day");

  const API_URL = `https://api.themoviedb.org/3/${keyword}?api_key=e5a60f35d7919e32ad95ee1d02bf9391`;
  const API_SEARCH =
    "https://api.themoviedb.org/3/search/movie?api_key=e5a60f35d7919e32ad95ee1d02bf9391&query";
  function test() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }
  useEffect(() => {
    test();
  }, []);

  const searchMovie = async (query) => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  function descriptionHandler() {
    setKeyword("trending/all/day");
    console.log(keyword);
    test();
  }

  const descriptionHandler2 = () => {
    setKeyword("movie/popular");
    console.log(keyword);
    test();
  };

  return (
    <>
      {/* <Navbar />
      <Header movies={movies} />
      <Footer /> */}
      <div className="navbar_container">
        <div className="navbar">
          <a href="/home">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <button onClick={descriptionHandler}>Popular</button>
          <a onClick={descriptionHandler2}>Now Playing</a>
          <a href="/home">Top Rated</a>
          <div
            className="me-auto my-2 my-lg-3"
            style={{ maxHeight: "100px" }}
          ></div>
        </div>
        <div className="searchbar">
          <input
            autoComplete="off"
            type="search"
            placeholder="Movie Search"
            aria-label="search"
            name="query"
            value={query}
            onChange={changeHandler}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                searchMovie(query)
              }
            }
          }
          />
          <button onClick={() => searchMovie(query)} type="search">
            <AiOutlineSearch size={25} />
          </button>
        </div>
      </div>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <div className="image_container">
            <img src={test} alt="hi" />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
