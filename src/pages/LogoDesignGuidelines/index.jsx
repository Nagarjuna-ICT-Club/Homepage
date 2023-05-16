import React from "react";
import "./styles/style.scss";
import LinkComponent from "../../utils/Link";
import image from "../../assets/LogoDesign.webp"

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
          <h3>Nagarjuna ICT Club Logo Design Competition</h3>
          <div className="logo">
            <p>
              <i className="ri-calendar-line"></i>
            </p>
            <p>
              {" "}
              <strong>Date:</strong> 19 May 2023
            </p>
          </div>
          <div className="price">
            <p>
              <i className="ri-time-line"></i>
            </p>
            <p>
              {" "}
              <strong>Time:</strong> 11:30 AM - 01:00 PM{" "}
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
          <h1>Nagarjuna ICT Club Logo Design Competition</h1>
          <p>
            Welcome to the Nagarjuna ICT Club Logo Design Competition webpage!
            This competition is a fantastic opportunity for all students of
            Nagarjuna College of IT to showcase their creativity and design
            skills by creating a unique logo that reflects the mission and
            vision of the ICT Club.
          </p>
          <div>
            <p>
              {" "}
              <strong>Competition Details</strong>{" "}
            </p>
            <p>
              The competition will take place on <em>May 19, 2023,</em> from
              <em> 11:30 AM to 1:00 PM</em> at Nagarjuna College of IT. The
              winner of the competition will receive a cash prize of <em> NPR 1000.</em> 
            </p>
          </div>
          <div>
            <p>
              To participate, you must submit your logo design in PNG format
              with a transparent background, along with the raw file (such as
              PSD) used to create it. We encourage you to use tools like Canva,
              Photoshop, or Illustrator to create your designs. The ideal
              dimensions for raster graphics are <em>1200px</em> by{" "}
              <em>1200px</em> with a minimum resolution of <em>300dpi.</em> For
              social media, we suggest creating a square format logo with a
              minimum size of <em>400px</em> by <em>400px.</em> Please
              incorporate the primary color of the Nagarjuna ICT Club{" "}
              <em>(#243e6a) </em>
              into your design.
            </p>
          </div>
          <div>
            <p>
              {" "}
              <strong>Design Guidelines</strong>{" "}
            </p>
            <p>
              Your design should reflect the mission and vision of the Nagarjuna
              ICT Club, which is to promote technological advancement,
              collaboration, and innovation among students in the field of IT.
              To help you create a design that aligns with the club's mission
              and vision, we encourage you to review the logo design principles
              and guidelines, which can be found at{" "}
              <a
                href="https://www.canva.com/learn/logo-design-principles/"
                target="_blank"
              >
                https://www.canva.com/learn/logo-design-principles/
              </a>
            </p>
          </div>
          <div className="evaluation">
            <p>
              {" "}
              <strong>Evaluation Process</strong>{" "}
            </p>
            <p>
              The evaluation process will be carried out by the{" "}
              <em>college administration</em> and an <em>executive</em> of the
              ICT Club, who will assess the designs based on their creativity,
              uniqueness, and alignment with the club's mission and vision.
            </p>
          </div>
          <div>
            <p>
              {" "}
              <strong>Submission</strong>{" "}
            </p>
            <p>
              To submit your design, please email it to
              <span style={{ color: "#243a6a" }}>
                {" "}
                <strong>ictclub@nagarjuna.edu.np.</strong>{" "}
              </span>
              The deadline for submissions is <em>May 19, 2023, at 1:00 PM.</em>
            </p>
          </div>
          <div>
            <p>
              We can't wait to see your creative and unique logo designs that
              represent the Nagarjuna ICT Club's mission and vision. If you have
              any questions or concerns regarding the competition, please do not
              hesitate to contact us at ictclub@nagarjuna.edu.np.
            </p>
          </div>
          <p>Best of luck to all participants!</p>
          <p>Nagarjuna ICT Club</p>
        </div>
      </div>
    </div>
  );
};

export default LogoDesionGuideLines;
