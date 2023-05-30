import React from "react";
import Aside from "../../Components/Event/Guidelines/Aside";
import "./styles/style.scss";
import LinkComponent from "../../utils/Link";

const GitandGithubWorkShop = () => {
  const entryfeeandregistration = [
    {
      title: "Entry Fee and Registration:",
      fee: [
        "Participants are required to pay an entry fee of NPR 100.",
        "Registration will be done using the participants' membership ID, and it is mandatory for all interested individuals.",
        "The registration process will be communicated through our club's official communication channels.",
      ],
    },
    {
      title: "Mode of Operation:",
      fee: [
        "The workshop will be conducted in person and on-premise at the specified venue.",
        "Participants are expected to attend the session physically.",
        "Students are required to bring laptops.",
      ],
    },
    {
      title: "Workshop Outline:",
      fee: [
        "Git Introduction",
        "GitHub Introduction",
        "Difference between Git and GitHub",
        "GitHub Sign Up",
        "GitHub Command Line Interface (CLI) & Graphical User Interface (GUI) in the browser.",
        "Creating a Repository",
        "Pushing Changes",
        "Forking a Repository",
        "Pull Requests",
        "Wrap Up and Conclusion",
      ],
    },
    {
      title: "Instructor Details:",
      fee: [
        "Name: Samrid Pandit",
        "Profession: Backend Engineer at Zebec",
        "Address: Kathmandu",
        "Email: hello@samrid.me",
      ],
    },
    {
      title: "Certificates:",
      fee: [
        "Certificates of attendance will be provided to all students who attend the session.",
        "A Token of Love and Khada will be given to the instructor for their valuable contribution.",
      ],
    },
  ];

  return (
    <div className="gitandgithubworkshop__container">
      <div className="link">
        <p>
          <i className="ri-arrow-left-line"></i>
        </p>
        <LinkComponent path={"/"} title={"Back to home"} />
      </div>
      <div className="wrapper">
        <Aside
          image={
            "https://ik.imagekit.io/hjapyoj8o/gitandgithub.jpg?updatedAt=1685432118947"
          }
          date="2 June 2023"
          time={"10:00 AM - 12:00 PM"}
          venue="Nagarjuna College of IT"
          registrationLink="https://docs.google.com/forms/d/e/1FAIpQLSfVIocBCdueHv8hm-weSlWsixriL6lln_ic4_y6hRQZ2-uKPQ/viewform"
        />
        <div className="event_details">
          <h1>Workshop on Git & GitHub</h1>
          <h2>Objective:</h2>
          <p>
            The workshop aims to provide students with a comprehensive
            understanding of Git and GitHub, including the basics, differences,
            and practical usage. Participants will learn essential concepts and
            gain hands-on experience with these powerful tools.
          </p>
          <div style={{height:"800px",width:"600"}}>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfVIocBCdueHv8hm-weSlWsixriL6lln_ic4_y6hRQZ2-uKPQ/viewform?embedded=true"
              width={window.innerWidth < 425 ? "400" : "100%"}
              height="800"
              frameBorder={"0"}
              marginHeight={"0"}
              marginWidth={"0"}
            >
              Loading…
            </iframe>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default GitandGithubWorkShop;
