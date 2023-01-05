import React, {useState} from "react";
import MovieBox from "../MovieBox/MovieBox";

import SearchBar from "../Navbar/SearchBar";

const Header = ({movies}) => {
  return (
    <div>
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
            <img src={test} alt="not found" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
