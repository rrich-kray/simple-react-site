import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-container-left">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3321790987657!2d-122.01116604835985!3d37.33464377974313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sus!4v1654010714566!5m2!1sen!2sus"
          width="600"
          height="450"
          // style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div id="footer-container-right">
        <h1 id="contact">Contact Info:</h1>
        <span>Email: rrich.kray.93@gmail.com</span>
        <span>GitHub: https://github.com/rrich-kray</span>
        <span>Portfolio: </span>
      </div>
    </div>
  );
};

export default Footer;
