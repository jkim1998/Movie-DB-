import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillGithub, AiFillLinkedin, AiOutlineBold } from "react-icons/ai";

import './Footer.css';

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
          <h>About</h>
          <a>Logitech Story</a>
          <a>Careers</a>
          <a>Investors</a>
          <a>Blog</a>
          <a>Press</a>
          <a>Contact us</a>
        </div>
        <div className="category">
          <h>Values</h>
          <a>Social Impact</a>
          <a>Sustainability</a>
          <a>Recylcing</a>
          <a>Acesssibvility</a>
        </div>
        <div className="category">
          <h>Partners</h>
          <a>Affilate Program</a>
          <a>Influencer</a>
        </div>
        <div className="category">
          <h>Customers</h>
          <a>Return Policy</a>
          <a>Email Preferences</a>
          <a>Student Discount</a>
        </div>
      </div>
      <div className="footer-bot">
        <div className="social">
          <p className="icons">
            <a href="https://github.com/jkim1998" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="https://www.linkedin.com/in/jkim980/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://jonathankim980.com" target="_blank" rel="noopener noreferrer">
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
            <span>Yes, I want to receive news and product emails.</span>
            <br />
            Read our
          <span>
            <a href="http://www.google.com" target="_blank" rel="noopener noreferrer" className="policy">
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