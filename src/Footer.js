import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <div className="box">
        <div className="container">
          <div className="col">
            <h4>Logo</h4>
          </div>
          <div className="col">
            <h4>Products</h4>
            <p>page builder</p>
            <p>frontend</p>
          </div>
          <div className="col">
            <h4>Learn</h4>
            <p>Elements Library</p>
            <p>Page builder Help</p>
            <p>Page Builder How To's</p>
            <p>Ecommerce resourses</p>
            <p>Ecommerce Blog</p>
            <p>Going Headless</p>
          </div>
          <div className="col">
            <h4>Company</h4>
            <p>Abouts Us</p>
            <p>Careers</p>
            <p>Remote Life blog</p>
            <p>Press</p>
            <p>Swag store</p>
          </div>
          <div className="col">
            <h4>Get in touch</h4>
            <p>Contact Us</p>
            <p>Become p Partner</p>
            <p>Hire p Partner</p>
            <p>Help center</p>
          </div>
        </div>
        <div className="row">
          <div className="row-sm">
            <div className="social-media">
              <p>link 1</p>
              <p>link 1</p>
              <p>link 1</p>
              <p>link 1</p>
              <p>link 1</p>
            </div>
            <div className="privacy">
              <p>Legal</p>
              <p>Privacy</p>
              <p>&copy;2021 Shogun Labs, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
