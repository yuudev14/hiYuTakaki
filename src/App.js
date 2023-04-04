import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import "react-lazy-load-image-component/src/effects/blur.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:name" element={<ProjectDetails />} />
        </Routes>
      </Router>
      {/* <Bot /> */}
    </div>
  );
};

export default App;
