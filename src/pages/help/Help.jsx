import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiFillLinkedin, AiOutlineBold } from "react-icons/ai";
import { BsFillPersonFill, BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import Navbar from "../../components/Navbar/Navbar";

import "./Help.css";

const Help = () => {
  return (
    <>
      <Navbar />
      <div className="banner_help">
        <h1>Help Center</h1>
        <p>Frequently asked questions are listed below.</p>
      </div>
      <div className="container_help">
        <ul>
          <li className="question"> What is this Website?</li>
          <li className="answer">
            <p>
              This is a Moive Database web application that displays various movie
              information that are registered in TMDB. You may not be able find
              films that are not officially registered in TMDB
            </p>
          </li>

          <li className="question"> What Technology is used?</li>
          <li className="answer">
            <p>
              React.js, TMDB API, Vercel 
            </p>
          </li>

          <li className="question"> How do I use this website?</li>
          <li className="answer">
            <p>
              Try clicking categories in the navbar or search a speicifc movie with keywords in the searchbar.
            </p>
          </li>
        </ul>
      </div>
      <div className="footer_help">
        <p>
          Couldn't find an answer? <a href="contact">Contact me</a>
        </p>
      </div>
    </>
  );
};

export default Help;
