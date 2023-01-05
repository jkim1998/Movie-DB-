import React from "react";
import SearchBar from "./SearchBar";

import "./SearchBar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar_container">
        <div className="navbar">
          <a href="/home">MovieDb App</a>
          <a href="/home">Trending</a>
          <div
            className="me-auto my-2 my-lg-3"
            style={{ maxHeight: "100px" }}
          ></div>
        </div>
        <SearchBar />
      </div>
    </>
  );
};

export default Navbar;
