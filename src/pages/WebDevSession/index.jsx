import React from "react";
import Aside from "../../Components/Event/Guidelines/Aside";
import LinkComponent from "../../utils/Link";
import "./styles/style.scss";

const WebDevSession = () => {
  const entryfeeandregistration = [
    {
      title: "Entry Fee and Registration:",
      fee: [
        "Free entry for club members",
        "Registration will be done using the participants' membership ID, and it is mandatory for all interested individuals.",
        "The registration process will be communicated through our club's official communication channels.",
      ],
    },
    {
      title: "Mode of Operation:",
      fee: [
        "The workshop will be conducted in person and on-premise at the specified venue.",
        "Participants are expected to attend the session physically.",
        "Students may bring laptops in the session.",
      ],
    },
    {
      title: "Instructor Details:",
      fee: [
        "Name: Biplab Karki",
        "Profession: CTO at clamphook",
        "Address: Kathmandu",
        "Email: biplabkarki04@gmail.com",
      ],
    },
    {
      title: "Giveaway:",
      fee: [
        "Five fortunate attendees will have the chance to win exclusive stickers, adding a touch of excitement to this knowledge-packed session.",
      ],
    },
  ];

  return (
    <div className="WebDevSession__container">
      <div className="link">
        <p>
          <i className="ri-arrow-left-line"></i>
        </p>
        <LinkComponent path={"/"} title={"Back to home"} />
      </div>
      <div className="wrapper">
        <Aside
          image={
            "https://ik.imagekit.io/hjapyoj8o/webdevsession.jpg?updatedAt=1685963544023"
          }
          date="9 June 2023"
          time={"10:30 AM - 12:30 PM"}
          venue="Nagarjuna College of IT"
          registrationLink="https://docs.google.com/forms/d/e/1FAIpQLSeAjqqQR2swLhIKruRub0rw1rlneCZDArLA8lQfnOKaHrXO9g/viewform"
        />
        <div className="event_details">
          <h1>Web Development Session</h1>
          <h2>Objective:</h2>
          <p>
            During this session,We will delve into various aspects of web
            development, including the latest tools, emerging trends, and
            strategic roadmaps.
          </p>

          {entryfeeandregistration.map((entry, i) => {
            return (
              <div key={i}>
                <h2>{entry.title}</h2>
                {entry.fee.map((fee, i) => {
                  return (
                    <ul key={i}>
                      <li>{fee}</li>
                    </ul>
                  );
                })}
              </div>
            );
          })}
          <p style={{listStyle:"none"}}>
            We eagerly anticipate your presence at the Web Development Session -
            Exploring Tools, Trends, and Roadmaps. Let us come together as a
            community of passionate learners, embracing the opportunities for
            growth and advancement in the field of web development.
          </p>
          <div style={{ height: "800px", width: "600" }}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSeAjqqQR2swLhIKruRub0rw1rlneCZDArLA8lQfnOKaHrXO9g/viewform?embedded=true"
              width={window.innerWidth < 425 ? "400" : "100%"}
              height="800"
              frameBorder={"0"}
              marginHeight={"0"}
              marginWidth={"0"}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevSession;
