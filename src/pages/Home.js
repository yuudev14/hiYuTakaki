import React from "react";
import About from "../components/about";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import "../styles/sass/app.scss";

const Home = () => {
  return (
    <>
      <main className="home">
        <Banner />
        <Skills />
        <Projects />

        <About />
        <Contact />
      </main>
    </>
  );
};

export default Home;
