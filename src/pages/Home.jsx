import React from "react";
import Logo from "../assets/logov2.png";
import { useNavigate } from "react-router-dom";
import LinkComponent from "../utils/Link";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="App" style={{ backgroundImage: "../assets/bg.png" }}>
      <div className="content">
        <div className="img__container">
          <img src={Logo} alt="logo" />
          <div className="links">
            <LinkComponent
              path={"mission-vision"}
              title={"Check out Mission and Vision"}
            />
            <p>
              <i className="ri-arrow-right-up-line"></i>
            </p>
          </div>
        </div>
        <div className="divider"></div>
        <h1 className="title">Events</h1>

        <div className="events__container">
          <div className="event-card">
            <img
              src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="unsplash__image"
              width={"250"}
              height={"200"}
            />
            <div className="description__container">
              <h3>Logo Design Competition</h3>
              <div className="logo">
                <p>
                  <i className="ri-calendar-line"></i>
                </p>
                <p>16 May 2023</p>
              </div>
              <div className="price">
                <p>
                  <strong>Winning Price:</strong> Rs. 1000
                </p>
              </div>
              <div className="description">
                <p>
                  Thank you for your interest in submitting a logo design for
                  the Nagarjuna ICT Club! We are excited to see your creative
                  designs and want to ensure that your logos look their best in
                  all applications. Below are some guidelines to help you create
                  a high-quality logo that meets our requirements.
                </p>
                <div className="buttons">
                  <button onClick={() => navigate("/logo-design-guidelines")}>
                    Read More
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://docs.google.com/forms/d/e/1FAIpQLSf_wsY4ot25dEhQXBhkm6uKEnrtwAEtdSFeczouoUWSHtzM4g/viewform",
                        "_blank"
                      )
                    }
                    className="register__btn"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
