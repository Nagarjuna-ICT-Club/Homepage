import React from "react";
import "./styles/style.scss";
import { Link } from "react-router-dom";

const LogoDesionGuideLines = () => {
  return (
    <div className="logodesignguidelines__container">
      <div className="link">
        <Link to={"/"}>Back to home</Link>
      </div>
      <div className="wrapper">
        <div className="img__container">
          <img
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            alt="unsplash__image"
            width={"300"}
            height={"200"}
          />
          <h3>Logo Design Competition</h3>
          <div className="logo">
            <p>
              <i className="ri-calendar-line"></i>
            </p>
            <p>May 10 - May 12</p>
          </div>
          <div className="price">
            <p>
              <i className="ri-price-tag-3-fill"></i>
            </p>
            <p>Rs. 1000</p>
          </div>
        </div>
        <div className="event__details">
          <h2>Event Details:</h2>
          <h3>Guidelines for Logo Design</h3>
          <p>
            Thank you for your interest in submitting a logo design for the
            Nagarjuna ICT Club! We are excited to see your creative designs and
            want to ensure that your logos look their best in all applications.
            Below are some guidelines to help you create a high-quality logo
            that meets our requirements.
          </p>
          <p>
            {" "}
            <strong>File Format</strong>{" "}
          </p>
          <p>
            Please submit your logo design in PNG format with a transparent
            background, along with the raw file (such as PSD) used to create it.
          </p>
          <p>
            {" "}
            <strong>Dimensions</strong>{" "}
          </p>
          <p>
            To ensure your logo looks its best in all applications, we recommend
            creating it in both vector and raster formats. The ideal dimensions
            for raster graphics are 1200px by 1200px with a minimum resolution
            of 300dpi. For social media, we suggest creating a square format
            logo with a minimum size of 400px by 400px, as the dimensions may
            vary depending on the platform.
          </p>
          <p>
            {" "}
            <strong>Color</strong>{" "}
          </p>
          <p>
            The primary color for the Nagarjuna ICT Club is #243e6a. We
            recommend incorporating this color into your design, but feel free
            to use other colors as well. Please keep in mind that the logo
            should be readable in both color and black and white.
          </p>
          <p>
            {" "}
            <strong>Design Tools</strong>{" "}
          </p>
          <p>
            You can use various design tools to create your logo, such as Canva,
            Photoshop, or Illustrator. If you are unfamiliar with these tools,
            don't worry! There are plenty of online tutorials and resources
            available to help you get started. For more information on logo
            design principles, you can also refer to this article by{" "}
            <a
              href="https://www.canva.com/learn/logo-design-principles/
"
            >
              Canva
            </a>{" "}
          </p>
          <p>
            {" "}
            <strong>Originality</strong>{" "}
          </p>
          <p>
            We value originality and creativity in all logo designs. Please
            ensure that your design is unique and not a copy of an existing logo
            or design.
          </p>
          <p>
            We hope these guidelines help you create a high-quality logo that
            meets our requirements. If you have any questions or concerns,
            please do not hesitate to contact us at ictclub@nagarjuna.edu.np.
          </p>
          <p>Good luck with your design!</p>
        </div>
      </div>
    </div>
  );
};

export default LogoDesionGuideLines;
