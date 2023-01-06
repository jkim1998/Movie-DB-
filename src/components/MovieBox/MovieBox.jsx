import React, { useState } from "react";
import "./MovieBox.css";
import { IoMdCloseCircle } from "react-icons/io";
import img_notfound from "../../assets/notfound.png";

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
  const [show, setShow] = useState("false");

  const handleShow = () => setShow("true");
  const handleClose = () => setShow("false");
  const [style, setStyle] = useState({ display: "none" });

  function onError(e) {
    e.target.src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/No_sign.svg/2048px-No_sign.svg.png";
  }

  return (
    <div className="movies">
      <div>
        <div
          className="image_container"
          onMouseEnter={(e) => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
        >
          <img
            className="poster"
            src={API_IMG + poster_path}
            onClick={handleShow}
            onError={(e) => onError(e)}
          />
          <div
            className="overlay"
            style={style}
            onClick={(e) => {
              setStyle({ display: "none" });
            }}
          >
            <span className="viewmore">View More</span>
            <div className="moviebox">
              <div className="button_container">
                <button show={show} onClick={handleClose} className="close_btn">
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
              <h4>IMDb: {vote_average}</h4>
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
