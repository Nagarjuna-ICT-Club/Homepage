import React from "react";
import "./styles/style.scss";
import LinkComponent from "../../utils/Link";
import image from "../../LogoDesign.png";

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
          <img src={image} alt="unsplash__image" width={"300"} height={"500"} />
          <h3>Logo Design Competition</h3>
          <div className="logo">
            <p>
              <i className="ri-calendar-line"></i>
            </p>
            <p>
              {" "}
              <strong>Date:</strong> 16 May 2023
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
          <button
            className="register__btn"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSf_wsY4ot25dEhQXBhkm6uKEnrtwAEtdSFeczouoUWSHtzM4g/viewform",
                "_blank"
              )
            }
          >
            Register Now
          </button>
        </div>
        <div className="event__details">
          <h1>Guidelines for Logo Design</h1>
          <p>
            Thank you for your interest in submitting a logo design for the
            Nagarjuna ICT Club! We are excited to see your creative designs and
            want to ensure that your logos look their best in all applications.
            Below are some guidelines to help you create a high-quality logo
            that meets our requirements.
          </p>
          <div>
            <p>
              {" "}
              <strong>File Format</strong>{" "}
            </p>
            <p>
              Please submit your logo design in PNG format with a transparent
              background, along with the raw file (such as PSD) used to create
              it.
            </p>
          </div>
          <div>
            <p>
              {" "}
              <strong>Dimensions</strong>{" "}
            </p>
            <p>
              To ensure your logo looks its best in all applications, we
              recommend creating it in both vector and raster formats. The ideal
              dimensions for raster graphics are <em>1200px</em> by{" "}
              <em>1200px</em> with a minimum resolution of <em>300dpi.</em> For
              social media, we suggest creating a square format logo with a
              minimum size of <em>400px</em> by <em>400px</em> , as the
              dimensions may vary depending on the platform.
            </p>
          </div>
          <div>
            <p>
              {" "}
              <strong>Color</strong>{" "}
            </p>
            <p>
              The primary color for the Nagarjuna ICT Club is{" "}
              <strong>#243e6a.</strong> We recommend incorporating this color
              into your design, but feel free to use other colors as well.
              Please keep in mind that the logo should be readable in both color
              and black and white.
            </p>
          </div>
          <div>
            <p>
              {" "}
              <strong>Design Tools</strong>{" "}
            </p>
            <p>
              You can use various design tools to create your logo, such as
              Canva, Photoshop, or Illustrator. If you are unfamiliar with these
              tools, don't worry! There are plenty of online tutorials and
              resources available to help you get started. For more information
              on logo design principles, you can also refer to this article by{" "}
              <a
                href="https://www.canva.com/learn/logo-design-principles/
"
              >
                https://www.canva.com/learn/logo-design-principles/
              </a>{" "}
            </p>
          </div>
          <div>
            <p>
              {" "}
              <strong>Originality</strong>{" "}
            </p>
            <p>
              We value originality and creativity in all logo designs. Please
              ensure that your design is unique and not a copy of an existing
              logo or design.
            </p>
            <p>
              We hope these guidelines help you create a high-quality logo that
              meets our requirements. If you have any questions or concerns,
              please do not hesitate to contact us at{" "}
              <span style={{ color: "#243e6a" }}>
                <strong>ictclub@nagarjuna.edu.np</strong>{" "}
              </span>
            </p>
          </div>
          <div className="evaluation">
            <h2>Evaluation</h2>
            <p>
              The evaluation will be carried out by{" "}
              <em>college administration</em> and <em>ict executives.</em>
            </p>
          </div>
          <p>Good luck with your design!</p>
        </div>
      </div>
    </div>
  );
};

export default LogoDesionGuideLines;
