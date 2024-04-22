import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resume" element={<Main />} />
    </Routes>
  );
}

export default App;
