import React from "react";
import "./styles/style.scss";


const Aside = ({ image, date, time, venue, registrationLink }) => {
  return (
    <div className="img__container">
      <img src={image} alt="unsplash__image" width={"300"} height={"500"} />
      <h3>Nagarjuna ICT Club Logo Design Competition</h3>
      <div className="logo">
        <p>
          <i className="ri-calendar-line"></i>
        </p>
        <p>
          {" "}
          <strong>Date:</strong> {date}
        </p>
      </div>
      <div className="price">
        <p>
          <i className="ri-time-line"></i>
        </p>
        <p>
          {" "}
          <strong>Time:</strong> {time}
        </p>
      </div>
      <div className="price">
        <p>
          <i className="ri-map-pin-line"></i>
        </p>
        <p>
          {" "}
          <strong>Venue:</strong> {venue}
        </p>
      </div>
      {registrationLink !== "0" ? (
        <button
          className="register__btn"
          onClick={() => window.open(registrationLink, "_blank")}
        >
          Register Now
        </button>
      ) : (
        <p>popup</p>
      )}
    </div>
  );
};

export default Aside;
