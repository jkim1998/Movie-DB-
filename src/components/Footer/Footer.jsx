import React, { useState, useRef, useEffect } from "react";
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
        "service_7j5jo9x",
        "template_s5r0xwm",
        form.current,
        "v8YqFVE_Ecepm6GUK"
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
          <a href="FAQ">FAQ</a>
          <a>Corporate information</a>
          <a>Contact us</a>
        </div>
        <div className="category">
          <h1>Services</h1>
          <a>Help Center</a>
        </div>
        <div className="category">
          <h1>Legal</h1>
          <a>Privacy Policy</a>
          <a>Terms of use</a>
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
              Read our
              <span>
                <a
                  href="http://www.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="policy"
                >
                  privacy policy.
                </a>
              </span>
            </form>
          )}
        </div>
      </div>
      <div className="footer_footer">
        <div className="copyright">
            <p>©2022 Jonathan Kim. All rights reserved</p>
          <ul>
            <li>
              <a>Terms of Use</a>
            </li>
            <li>
              <a>Web Privacy Policy</a>
            </li>
            <li>
              <a>Product Privacy Policy</a>
            </li>
            <li>
              <a>Sitemap</a>
            </li>
          </ul>
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
