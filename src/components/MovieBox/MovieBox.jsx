import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./MovieBox.css";
import { IoMdCloseCircle } from "react-icons/io";


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
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [style, setStyle] = useState({ display: "none" });

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
                <button show={show} onHide={handleClose} className="close_btn">
                  <IoMdCloseCircle size={50}/>
                </button>
              </div>
              <div className="movie_detail">
                <img style={{ width: "14rem" }} src={API_IMG + poster_path} />
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
