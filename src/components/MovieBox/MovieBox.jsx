import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import "./MovieBox.css";

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
            <span className="btn">View More</span>
            <Modal show={show} onHide={handleClose} className="test">
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="movie_detail">
                  <img style={{ width: "14rem" }} src={API_IMG + poster_path} />
                </div>
                <h3>{title}</h3>
                <h4>IMDb: {vote_average}</h4>
                <h5>Release Date: {release_date}</h5>
                <br></br>
                <h6>Overview</h6>
                <p>{overview}</p>
              </Modal.Body>
              <Modal.Footer>
                <p>{video}</p>
                <p>{homepage}</p>
                <p>{genres}</p>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
