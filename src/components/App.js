import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import FirstPage from "./FirstPage";
import Exp from "./Exp";
import Project from "./Project";
import About from "./About";
import Note from "./Note";

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
