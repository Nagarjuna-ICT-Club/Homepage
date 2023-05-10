import React from "react";
import "./styles/style.scss";
import LinkComponent from "../../utils/Link";
import { Link } from "react-router-dom";

const LogoDesionGuideLines = () => {
  return (
    <div className="logodesignguidelines__container">
      <div className="link">
        <p>
          <i className="ri-arrow-left-line"></i>
        </p>
        <LinkComponent path={"/"} title={"Back to home"} />
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
            <p>
              {" "}
              <strong>Date:</strong> 12 May 2023
            </p>
          </div>
          <div className="price">
            <p>
              <i className="ri-time-line"></i>
            </p>
            <p>
              {" "}
              <strong>Time:</strong> 3:00 PM - 4:30 PM{" "}
            </p>
          </div>
          <div className="price">
            <p>
              <i className="ri-map-pin-line"></i>
            </p>
            <p>
              {" "}
              <strong>Venue:</strong> Nagarjuna College of IT
            </p>
          </div>
        </div>
        <div className="event__details">
          <h3>Evaluation</h3>
          <p>
            The evaluation will be carried out by{" "}
            <em>college administration</em> and <em>ict executives.</em>
          </p>
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
            for raster graphics are <em>1200px</em> by <em>1200px</em> with a
            minimum resolution of <em>300dpi.</em> For social media, we suggest
            creating a square format logo with a minimum size of <em>400px</em>{" "}
            by <em>400px</em> , as the dimensions may vary depending on the
            platform.
          </p>
          <p>
            {" "}
            <strong>Color</strong>{" "}
          </p>
          <p>
            The primary color for the Nagarjuna ICT Club is{" "}
            <strong>#243e6a.</strong> We recommend incorporating this color into
            your design, but feel free to use other colors as well. Please keep
            in mind that the logo should be readable in both color and black and
            white.
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
              https://www.canva.com/learn/logo-design-principles/
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
            please do not hesitate to contact us at{" "}
            <span style={{ color: "#243e6a" }}>
              <strong>ictclub@nagarjuna.edu.np</strong>{" "}
            </span>
          </p>
          <p>Good luck with your design!</p>
        </div>
      </div>
    </div>
  );
};

export default LogoDesionGuideLines;
