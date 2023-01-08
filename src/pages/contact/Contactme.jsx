import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiFillLinkedin, AiOutlineBold } from "react-icons/ai";
import { BsFillPersonFill, BsTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

import Navbar from "../../components/Navbar/Navbar";

import "./Contactme.css";

const Term = () => {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [error_email, setErrorEmail] = useState("");

  const sendEmail = (e) => {
    //prevent re-render
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cqzefuu",
        "template_can66pk",
        form.current,
        "VZok_L53Z8vaiPj2Q"
      )
      .then(
        (result) => {
          console.log(result.text);
          // console.log("message sent");
          setStatus("SUCCESS");
        },
        (error) => {
          console.log(error.text);
          setStatus("FAILED");
        }
      );
  };
  // success message time out after certain time(3000)
  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);

      document.getElementById("form").reset();
    } else {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);
  return (
    <>
      <Navbar />
      <div className="banner">
        <h1>Contact</h1>
      </div>
      <div className="main_page">
        <div className="confirmation">
          {status === "SUCCESS" && renderAlert_success()}
          {status === "FAILED" && renderAlert_fail()}
          <form ref={form} onSubmit={sendEmail} id="form">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required="required"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required="required"
              onInvalid={invalidEmail()}
            />
            <textarea name="message" placeholder="Message"></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>

        <div className="contactinfo">
          <div className="personalInfo">
            <div className="test">
              <BsFillPersonFill />
              <p>Jonathan Kim</p>
            </div>
            <div className="test">
              <BsTelephoneFill /> <p>(737) 484 - 2504</p>
            </div>
            <div className="test">
              <GrMail />
              <p>JonathanKim980@gmail.com</p>
            </div>
          </div>
          <div className="links">
            <AiFillGithub size={40} />
            <AiFillLinkedin size={40} />
            <AiOutlineBold size={40} />
          </div>
        </div>
      </div>
    </>
  );
};
const renderAlert_success = () => (
  <div className="confirmation">
    <p>Your message has been sent</p>
  </div>
);
const renderAlert_fail = () => (
  <div className="confirmation">
    <p>Error. Please try again later</p>
  </div>
);

const invalidEmail = () => {
  <div>
    <p>this is required</p>
  </div>;
};
export default Term;
