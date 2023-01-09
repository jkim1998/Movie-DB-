import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiFillLinkedin, AiOutlineBold } from "react-icons/ai";


import "./Footer.css";

const Footer = () => {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [error_email, setErrorEmail] = useState("");

  const sendEmail = (e) => {
    //prevent re-render
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SUB_SERVICE,
        process.env.REACT_APP_EMAILJS_SUB_TEMPLATE,
        form.current,
        process.env.REACT_APP_EMAILJS_SUB_API
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
  // useEffect(() => {
  //   if (status === "SUCCESS") {
  //     setTimeout(() => {
  //       setStatus("");
  //     }, 3000);
  //   }
  // }, [status]);

  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="category">
          <h1>About</h1>
          <a href="contact">Contact me</a>
          <a href="https://github.com/jkim1998/Movie-DB-" target="_blank">Source Code</a>
        </div>
        <div className="category">
          <h1>Services</h1>
          <a href="help">Help Center</a>
        </div>
        <div className="category text_align_right">
          <h1>Contact Info</h1>
          <span>Jonathan Kim</span>
          <span>(737) 484 - 2504</span>
          <span>JonathanKim980@gmail.com</span>
        </div>
      </div>
      <div className="footer-bot">
        <div className="social">
          <p className="icons">
            <a
              href="https://github.com/jkim1998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jkim980/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://jonathankim980.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineBold />
            </a>
          </p>
        </div>
        <div className="contactMe">
          {status && renderAlert()}
          {!status && (
            <form ref={form} onSubmit={sendEmail}>
              <div className="subscribe_container">
                <div className="email_container">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="your email address"
                    className="email"
                    required="required"
                    onInvalid={invalidEmail()}
                  />
                </div>
                <input type="submit" value="Subscribe" className="send" />
              </div>
              <input type="checkbox" required="required" />
              <span>Yes, I want to sign up for newsletter. </span>
              {/* Read our
              <span>
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="policy"
                >
                  privacy policy.
                </a>
              </span> */}
            </form>
          )}
        </div>
      </div>
      <div className="footer_footer">
        <div className="copyright">
          <p>©2022 Jonathan Kim. All rights reserved</p>
        </div>
        <div>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
};
const renderAlert = () => (
  <div className="confirmation">
    <p>You are Subscribed to Newsletter!</p>
  </div>
);

const invalidEmail = () => {
  <div>
    <p>this is required</p>
  </div>;
};

export default Footer;
