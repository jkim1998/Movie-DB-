import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import MovieBox from "../MovieBox/MovieBox";

import Header from '../Header/Header';

import images from "../../constants";
import test from "../../assets/notfound.png";

import { movies, query, searchMovie, changeHandler} from './Movies';
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <>
    
      <div className="searchbar">
        <input
          autoComplete="off"
          type="search"
          placeholder="Movie Search"
          aria-label="search"
          name="query"
          value={query}
          onChange={changeHandler}
        />
        <button onClick={() => searchMovie(query)}><AiOutlineSearch /></button>
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
    </>
  );
}

export default SearchBar;
