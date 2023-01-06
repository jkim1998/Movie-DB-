import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiFillLinkedin, AiOutlineBold } from "react-icons/ai";

import "./Footer.css";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_API
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
          <form ref={form} onSubmit={sendEmail}>
            <div className="subscribe_container">
              <div className="email_container">
                <input
                  type="email"
                  name="user_email"
                  placeholder="your email address"
                  className="email"
                />
              </div>
              <input type="submit" value="Subscribe" className="send" />
            </div>
            <input type="checkbox" />
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
        </div>
      </div>
      <div className="footer_footer">
        <div className="copyright">
          <p>©2022 Jonathan Kim. All rights reserved</p> |<a>Terms of Use</a> |
          <a>Web Privacy Policy</a> |<a>Product Privacy Policy</a> |
          <a>Cookie Settings</a> |<a>Sitemap</a>
        </div>
        <div>
          <p>United States</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
