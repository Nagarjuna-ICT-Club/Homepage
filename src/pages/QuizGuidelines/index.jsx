import React from "react";
import Aside from "../../Components/Event/Guidelines/Aside";
import LinkComponent from "../../utils/Link";
import image from "../../assets/quiz.jpg";
import "./styles/style.scss";

const QuizCompetetion = () => {
  const rulesAndRegulations = [
    {
      title: "Eligibility",
      rules: [
        "The competition is open to all students of Nagarjuna College of IT.",
        "Participants must form teams consisting of a maximum of 3 participants per team.        ",
      ],
    },
    {
      title: "Registration",
      rules: [
        "Teams must complete the registration process by submitting the online registration form available on [Club website/Social Media].",
        "The registration deadline is 12 Jetha 2080,7:00 am.",
      ],
    },
    {
      title: " Quiz Format:",
      rules: [
        "The competition will be conducted in-person at the designated venue.",
        "Participants should arrive at the venue 2:00 pm before the event start time for registration and team check-in.",
      ],
    },
    {
      title: " Points and Scoring:",
      rules: [
        "Each correct answer in the Q&A round and coding round will earn the team points, as determined by the quiz organisers.",
        "In the rapid-fire round, points will be awarded based on the number of correct answers given within the time frame. ",
      ],
    },
    {
      title: "Prohibited Devices:",
      rules: [
        "The usage of mobile phones, laptops, or any electronic devices is strictly prohibited during the quiz rounds.",
      ],
    },
    {
      title: "Materials",
      rules: [
        "Plain sheets will be provided for calculations and rough work.",
        "Participants are required to carry their own pen for the competition.",
      ],
    },
    {
      title: "Tiebreaker",
      rules: [
        "In the event of a tie in the overall points, an additional Q&A round will be conducted among the tied teams to determine the winner.",
      ],
    },
    {
      title: "Violation",
      rules: [
        "Any violation of the rules may result in disqualification from the contest.",
      ],
    },
  ];

  const evaluationAndPrizes = [
    {
      evaluation:
        "The evaluation of the competition will be carried out by a panel of judges appointed by the Nagarjuna ICT Club and the college administration.",
    },
    {
      evaluation:
        "The winners will be announced and prizes will be awarded at the end of the competition.",
    },
    {
      prizes: [
        {
          title: "First Prize",
          prize: "NPR 5000 + Token of Love",
        },
        {
          title: "Runner Up",
          prize: "NPR 2000 + Token of Love",
        },
      ],
    },
    {
      last_evaluation:
        "Winner and Runner up teams will receive participation certificates.",
    },
  ];

  const schedule = [
    {
      time: " 2:00 pm",
      event: "Team Check-in",
    },
    {
      time: " 2:20 pm",
      event: "Introduction and Welcome Address",
    },
    {
      time: "--",
      event: "Rapid Fire Round",
    },
    {
      time: "--",
      event: "Q&A Round",
    },
    {
      time: "--",
      event: "Coding Round",
    },
    {
      time: "--",
      event: "Tiebreaker Round (if necessary)",
    },
  ];

  const topics = [
    {
      topic: " Information Technology(IT)",
    },
    {
      topic: " Digital Logic",
    },
    {
      topic: " Computer Networks",
    },
    {
      topic: " Web Development",
    },
    {
      topic: " Data Structure and algorithm",
    },
    {
      topic: " C Programming",
    },
    {
      topic: " Object oriented programming",
    },
  ];

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
          time="2:30 AM - 04:30 PM"
          venue="Nagarjuna College of IT"
          registrationLink="https://docs.google.com/forms/d/e/1FAIpQLSd_s80gEYslvDkGK5sWBdl8p_tz3PnQeI7pjbSzYYtqse1hOQ/viewform"
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
            <p>Each team will be asked a maximum of 10 questions.</p>
            <p>Each question is worth 10 point.</p>
            <p>Any member is allowed to answer the questions in this round.</p>
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

          <ol>
            {topics.map((topic, i) => {
              return <li key={i}>{topic.topic}</li>;
            })}
          </ol>
          <h2>Rules and Regulations:</h2>
          {rulesAndRegulations.map((rules, i) => {
            return (
              <div key={i}>
                <p>
                  <strong>{rules.title}</strong>
                </p>
                {rules.rules.map((rule, i) => {
                  return <p key={i}>{rule}</p>;
                })}
              </div>
            );
          })}
          <h2>Evaluation and Prizes</h2>
          {evaluationAndPrizes.map((evaluation, i) => {
            return (
              <div key={i}>
                <p>{evaluation?.evaluation}</p>
                {evaluation.prizes?.map((prize, i) => {
                  return (
                    <p key={i}>
                      <strong>{prize.title}</strong> : {prize.prize}
                    </p>
                  );
                })}
                <p>{evaluation.last_evaluation}</p>
              </div>
            );
          })}
          <h2>Event Schedule</h2>
          {schedule.map((schedule, i) => {
            return (
              <div key={i}>
                <p>
                  <strong>Start time:</strong>
                  {schedule.time}
                </p>
                <p>
                  {" "}
                  <strong>{schedule.event}</strong>{" "}
                </p>
              </div>
            );
          })}
          <p>
            Please note that a detailed schedule will be provided to registered
            teams prior to the event.
          </p>
          <p>
            We look forward to your active participation in the Information
            Technology Quiz Competition. This is your chance to showcase your
            knowledge and compete with fellow students. For further updates and
            announcements, please stay connected with us on [Club website/Social
            Media].
          </p>
          <div>
            <p>For any inquiries, kindly contact:</p>
            <p>
              <em>Sarbendra Sigdel</em>
            </p>
            <p>9851311380</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCompetetion;
