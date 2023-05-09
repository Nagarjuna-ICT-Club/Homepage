import React from "react";
import Logo from "../assets/logov2.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="App" style={{ backgroundImage: "../assets/bg.png" }}>
      <div className="content">
        <img src={Logo} alt="logo" />
        <h2 className="title">Events</h2>
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
                <p>May 10 - May 12</p>
              </div>
              <div className="price">
                <p>
                  <i className="ri-price-tag-3-fill"></i>
                </p>
                <p>Rs. 1000</p>
              </div>
              <div className="description">
                <p>
                  Thank you for your interest in submitting a logo design for
                  the Nagarjuna ICT Club! We are excited to see your creative
                  designs and want to ensure that your logos look their best in
                  all applications. Below are some guidelines to help you create
                  a high-quality logo that meets our requirements.
                </p>
                <button onClick={() => navigate("/logo-design-guidelines")}>
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
