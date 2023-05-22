import React from "react";
import Aside from "../../Components/Event/Guidelines/Aside";
import LinkComponent from "../../utils/Link";
import image from "../../assets/quiz.jpg";
import "./styles/style.scss";

const QuizCompetetion = () => {
  return (
    <div className="quizguidelines__container">
      <div className="link">
        <p>
          <i className="ri-arrow-left-line"></i>
        </p>
        <LinkComponent path={"/"} title={"Back to home"} />
      </div>
      <div className="wrapper">
        <Aside
          image={image}
          date="19 May 2023"
          time="11:30 AM - 01:00 PM"
          venue="Nagarjuna College of IT"
          registrationLink="https://docs.google.com/forms/d/e/1FAIpQLSf_wsY4ot25dEhQXBhkm6uKEnrtwAEtdSFeczouoUWSHtzM4g/closedform"
        />
        <div className="event_details">
          <h1>Nagarjuna ICT Club Quiz Competetition</h1>
          <p>
            Welcome to the Nagarjuna ICT Quiz Competetion.We look forward to
            your active participation in the Information Technology Quiz
            Competition. This is your chance to showcase your knowledge and
            compete with fellow students. 
            {/* For further updates and announcements, */}
            {/* please stay connected with us on [Club website/Social Media]. */}
          </p>
          <h2>Quiz Rounds</h2>
          <div>
            <p>
              <strong>1.Rapid Fire Round</strong>
            </p>
            <p>
              <strong>Duration:</strong> 30 seconds
            </p>
            <p>Each team leader will be asked a maximum of 10 questions.</p>
            <p>Each question is worth 1 point.</p>
            <p>
              Only the team leader is allowed to answer the questions in this
              round.
            </p>
          </div>
          <div>
            <p>
              <strong>2. Q&A Round</strong>
            </p>
            <p>
              Traditional question-and-answer round focusing on various aspects
              of information technology.
            </p>
            <p> Each question will have 4 options.</p>
            <p>Teams must select the correct option within 20 seconds.</p>
            <p>Each correct answer in this round is worth 2 points.</p>
          </div>
          <div>
            <p>
              <strong>3. Coding Round</strong>
            </p>
            <p>
              This round will challenge participants with coding puzzles and
              problems.
            </p>
            <p>Each team will face a maximum of 2 coding challenges.</p>
            <p>
              Teams must solve the given coding challenges within 30 seconds.
            </p>
            <p>Each correct coding challenge will earn the team 3 points.</p>
          </div>
          <h2>Topics Covered</h2>
          <p>
            Topics from{" "}
            <em>
              {" "}
              Information Technology(IT),Digital Logic,Computer Networks,Web
              Development,Data Structure and algorithm,C Programming and Object
              oriented programming{" "}
            </em>{" "}
            will be asked in the quiz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizCompetetion;
