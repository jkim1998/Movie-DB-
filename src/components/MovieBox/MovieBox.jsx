import React, { useState, useEffect, useRef } from "react";
import "./MovieBox.css";
import { IoMdCloseCircle } from "react-icons/io";
import img_notfound from "../../assets/notfound.png";
import onClickOutside from "react-onclickoutside";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
  video,
  homepage,
  genres,
}) => {
  const [style, setStyle] = useState({ display: "none" });
  const [open, setOpen] = useState(false);

  function openMovie() {
    setStyle({ display: "block" });
  }

  function closeMovie() {
    setStyle({ display: "none" });
  }

  function onError(e) {
    e.target.src = img_notfound;
  }

  let menuRef = useRef();

  useEffect(() => {
    let handler = () => {
      closeMovie();
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="movies">
      <div>
        <div
          className="image_container"
          // onMouseEnter={(e) => {
          //   setStyle({ display: "block" });
          // }}
          // onMouseLeave={(e) => {
          //   setStyle({ display: "none" });
          // }}
        >
          <img
            className="poster"
            src={API_IMG + poster_path}
            onClick={openMovie}
            // onClick={()=>{setOpen(!open)}}
            onError={(e) => onError(e)}
          />
          <div className="title_container">
            {/* <p>{title}</p> */}
          </div>
          <div className="overlay" style={style}>
            {/* <span className="viewmore">View More</span> */}
            <div className="moviebox" ref={menuRef}>
              <div className="button_container">
                <button onClick={closeMovie} className="close_btn">
                  <IoMdCloseCircle size={50} />
                </button>
              </div>
              <div className="movie_detail">
                <img
                  style={{ width: "14rem" }}
                  src={API_IMG + poster_path}
                  onError={(e) => onError(e)}
                />
              </div>
              <h3>{title}</h3>
              <h4>IMDb: {vote_average} / 10</h4>
              <h5>Release Date: {release_date}</h5>
              <br></br>
              <h6>Overview</h6>
              <p>{overview}</p>
            </div>
            <p>{video}</p>
            <p>{homepage}</p>
            <p>{genres}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
