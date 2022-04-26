import React from "react";
import { Routes, Route } from 'react-router-dom';
import './functionBased/App.css';
import TodoContainer from "./functionBased/components/TodoContainer";
import About from "./functionBased/pages/About";
import NotMatch from "./functionBased/pages/NotMatch";
import Navbar from "./functionBased/components/Navbar";
import SinglePage from "./functionBased/pages/SinglePage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="about" element={<About />} />
        <Route path="singlepage" element={<SinglePage />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  )
}

export default App