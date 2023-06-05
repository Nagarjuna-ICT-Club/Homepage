import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MissionVision from "./pages/MissionAndVision";
import LogoDesionGuideLines from "./pages/LogoDesignGuidelines";
import QuizCompetetion from "./pages/QuizGuidelines";
import GitandGithubWorkShop from "./pages/GitandGithubWorkshop";
import WebDevSession from "./pages/WebDevSession";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mission-vision" element={<MissionVision />} />
      <Route
        path="/logo-design-guidelines"
        element={<LogoDesionGuideLines />}
      />
      <Route path="/quiz-guidelines" element={<QuizCompetetion />} />
      <Route
        path="/workshop-git-and-github"
        element={<GitandGithubWorkShop />}
      />
      <Route path="web-dev-session" element = {<WebDevSession />} />
    </Routes>
  );
}

export default App;
