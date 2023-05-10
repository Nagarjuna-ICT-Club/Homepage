import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MissionVision from "./pages/MissionAndVision";
import LogoDesionGuideLines from "./pages/LogoDesignGuidelines";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mission-vision" element={<MissionVision />} />
      <Route
        path="/logo-design-guidelines"
        element={<LogoDesionGuideLines />}
      />
    </Routes>
  );
}

export default App;
