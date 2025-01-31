import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Middle Section */}
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* First Column: Logo and Social Links */}
            <div className="f-box f-box-01">
              <img
                src="https://www.crowdiego.com/images/logo.png" // Replace with your logo
                alt="Crowdiego Logo"
                className="footer-logo"
              />
              <div className="f-social-box">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-google-plus"></i>
                </a>
              </div>
            </div>

            {/* Second Column: Crowdiego Links */}
            <div className="f-box f-box-02">
              <h6>Crowdiego</h6>
              <ul className="footer-links">
                <li><a href="/about-us">What</a></li> {/* Valid link */}
                <li><a href="/about-us">Who we are</a></li> {/* Valid link */}
                <li><a href="/career">Career</a></li> {/* Valid link */}
                <li><a href="/featured-projects">Featured Projects</a></li> {/* Valid link */}
              </ul>
            </div>

            {/* Third Column: Other Links */}
            <div className="f-box f-box-03">
              <h6>Other</h6>
              <ul className="footer-links">
                <li><a href="/faqs">FAQs</a></li> {/* Valid link */}
                <li><a href="/how-it-works">How it works</a></li> {/* Valid link */}
                <li><a href="/trust-safety">Trust & Safety</a></li> {/* Valid link */}
                <li><a href="/support">Support</a></li> {/* Valid link */}
              </ul>
            </div>

            {/* Fourth Column: Categories */}
            <div className="f-box f-box-04">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li><a href="/categories/art">Art</a></li> {/* Valid link */}
                <li><a href="/categories/comics">Comics</a></li> {/* Valid link */}
                <li><a href="/categories/crafts">Crafts</a></li> {/* Valid link */}
                <li><a href="/categories/dance">Dance</a></li> {/* Valid link */}
                <li><a href="/categories/design">Design</a></li> {/* Valid link */}
              </ul>
              <ul className="footer-links">
                <li><a href="/categories/fashion">Fashion</a></li> {/* Valid link */}
                <li><a href="/categories/film-video">Film & Video</a></li> {/* Valid link */}
                <li><a href="/categories/food">Food</a></li> {/* Valid link */}
                <li><a href="/categories/games">Games</a></li> {/* Valid link */}
                <li><a href="/categories/journalism">Journalism</a></li> {/* Valid link */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            {/* Copyright Left */}
            <div className="copyright-left">
              <ul className="footer-links">
                <li><a href="/terms-conditions">Terms & Conditions</a></li> {/* Valid link */}
                <li><a href="/privacy-policy">Privacy Policy</a></li> {/* Valid link */}
                <li><a href="/cookie-policy">Cookie Policy</a></li> {/* Valid link */}
              </ul>
            </div>

            {/* Copyright Right */}
            <div className="copyright-right">
              <ul className="footer-links">
                <li>&copy; 2018 Crowdiego. All rights reserved</li>
                <li>Crafted by <a href="/insta-solutions">Insta Solutions</a></li> {/* Valid link */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Internal CSS for styling */}
      <style jsx>{`
        .footer {
          background-color: #f1f1f1;
          padding: 50px 0;
          color: #333;
        }

        .footer-middle {
          padding-bottom: 20px;
        }

        .footer-logo {
          width: 150px;
        }

        .f-social-box {
          margin-top: 15px;
        }

        .f-social-box a {
          margin: 0 10px;
          color: #333;
          font-size: 20px;
        }

        .f-social-box a:hover {
          color: #008cba;
        }

        .f-box {
          margin-bottom: 20px;
        }

        .f-box h6 {
          font-size: 18px;
          font-weight: bold;
          color: #333;
        }

        /* Use Flexbox for layout */
        .footer-links {
          display: flex;
          flex-wrap: wrap;
          padding-left: 0;
          list-style: none;
        }

        .footer-links li {
          margin-right: 20px;
          margin-bottom: 10px;
        }

        .footer-links li a {
          text-decoration: none;
          color: #333;
        }

        .footer-links li a:hover {
          color: #008cba;
        }

        .footer-bottom {
          background-color: #333;
          padding: 20px 0;
          color: #fff;
        }

        .footer-bottom .copyright-left,
        .footer-bottom .copyright-right {
          display: inline-block;
          width: 50%;
          text-align: center;
        }

        .footer-bottom ul {
          padding-left: 0;
          list-style: none;
        }

        .footer-bottom ul li {
          display: inline;
          margin-right: 20px;
        }

        .footer-bottom ul li a {
          text-decoration: none;
          color: #fff;
        }

        .footer-bottom ul li a:hover {
          color: #008cba;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
