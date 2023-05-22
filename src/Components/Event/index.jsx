import React from "react";
import { useNavigate } from "react-router-dom";

const Event = ({ event }) => {
  const navigate = useNavigate();
  return (
    <div className="event-card">
      <img
        src={event.card_img}
        alt="unsplash__image"
        width={"250"}
        height={"200"}
      />
      <div className="description__container">
        <h3>{event.card_title}</h3>
        <div className="logo">
          <p>
            <i className="ri-calendar-line"></i>
          </p>
          <p>{event.date}</p>
        </div>
        <div className="price">
          <p>
            <strong>Winning Price:</strong> {event.winning_price}
          </p>
        </div>
        <div className="description">
          <p>{event.description}</p>
          <div className="buttons">
            <button onClick={() => navigate(`${event.navigationPath}`)}>
              Read More
            </button>
            <button
              onClick={() => window.open(event.registrationLink, "_blank")}
              className="register__btn"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
