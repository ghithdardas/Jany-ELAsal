import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container" id="contact">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Keep in touch with us to honey harvesting
        </p>
      </section>
      <hr />

      {/*  <div className="footer-links"> <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="/sign-up">How it works</a>
            <a href="/">Testimonials</a>
            <a href="/">Careers</a>
            <a href="/">Terms of Service</a>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <a href="/">Contact</a>
            <a href="/">Support</a>
            <a href="/">Destinations</a>
            <a href="/">Sponsorships</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <a href="/">Submit Video</a>
            <a href="/">Ambassadors</a>
            <a href="/">Agency</a>
            <a href="/">Influencer</a>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a href="/">Instagram</a>
            <a href="/">Facebook</a>
            <a href="/">Youtube</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div> */}
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-icon-link twitter"
              href="/"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="social-icon-link twitter"
              href="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <small className="website-rights">
            Jany El-Asal © 2023 - All Rights Reserved
          </small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
