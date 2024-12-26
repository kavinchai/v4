import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import FirstPage from "./pages/FirstPage";
import Exp from "./pages/Exp";
import Project from "./pages/Project";
import About from "./pages/About";
import Note from "./pages/Note";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <FirstPage />
            <About />
            <Exp />
            <Project />
          </>
        } />
        <Route path="/notes" element={<Note/>}></Route>
      </Routes>
    </Router>
  );
};

export default App;
