import React from "react";
import Logo from "../assets/logov2.png";
import LinkComponent from "../utils/Link";
import Event from "../Components/Event";

const Home = () => {
  const events = [
    {
      card_img:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      card_title: "Logo Design Competition",
      date: "19 May 2023",
      winning_price: "Rs. 1000",
      description:
        "Welcome to the Nagarjuna ICT Club Logo Design Competition webpage! This competition is a fantastic opportunity for all students of Nagarjuna College of IT to showcase their creativity and design skills by creating a unique logo that reflects the mission and vision of the ICT Club.",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSf_wsY4ot25dEhQXBhkm6uKEnrtwAEtdSFeczouoUWSHtzM4g/viewform",
      navigationPath: "logo-design-guidelines",
    },
    {
      card_img:
        "https://i0.wp.com/www.campuzine.com/wp-content/uploads/2022/02/IMG_20210423_155654_239.jpg?fit=611%2C320&ssl=1",
      card_title: "Quiz Competetion",
      date: "26 May 2023",
      winning_price: "Rs 5000",
      description:
        "We look forward to your active participation in the Information Technology Quiz Competition. This is your chance to showcase your knowledge and compete with fellow students. For further updates and announcements, please stay connected ",
      navigationPath: "quiz-guidelines",
       registrationLink:"https://forms.gle/o4GA5heCvLRJpGSMA",
    },
  ];

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
          {events.map((event, i) => {
            return <Event event={event} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
