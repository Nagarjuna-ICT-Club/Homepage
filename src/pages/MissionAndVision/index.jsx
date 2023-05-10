import React from "react";
import "./styles/style.scss";
import LinkComponent from "../../utils/Link";

const MissionVision = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h2>Mission and Vision</h2>
        <div className="link">
          <p>
            <i className="ri-arrow-left-line"></i>
          </p>
          <LinkComponent path={"/"} title={"Back to home"} />
        </div>
        <div className="content__container">
          <div className="img__container">
            <img
              src="https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="unsplash-image"
              width={450}
              height={400}
            />
          </div>
          <div className="description__container">
            <p>
              <strong>Mission:</strong>
            </p>
            <p>
              The mission of the ICT (Information and Communication Technology)
              club is to foster a culture of innovation, collaboration, and
              lifelong learning in the field of technology among the students of
              our college. We aim to provide opportunities for students to
              develop technical skills, expand their knowledge, and connect with
              like-minded individuals who share their passion for technology.
            </p>
            <p>
              {" "}
              <strong>Vision:</strong>{" "}
            </p>
            <p>
              Our vision is to be a leading platform for students to explore and
              excel in the field of technology, and to make a positive impact on
              our college and the wider community. We strive to create an
              inclusive and supportive environment where students can discover
              their potential, unleash their creativity, and become future
              leaders in the digital age.
            </p>
            <p>
              Through various activities, such as workshops, seminars, coding
              competitions, and networking events, we seek to inspire, educate,
              and empower students to become confident and proficient in the use
              of technology. We believe that by working together and leveraging
              the power of technology, we can make a difference and contribute
              to a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
