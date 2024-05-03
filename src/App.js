import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";
import Resume from "./Resume/Resume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Main />} />
      <Route path="/resume/download" element={<Resume />} />
    </Routes>
  );
}

export default App;
