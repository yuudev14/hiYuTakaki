import React, { useEffect, useState } from "react";

const Skills = () => {
  const [strongSkills, setStrongSkills] = useState([]);
  const [experiencedSkills, setExperiencedSkills] = useState([]);
  function importAll(r) {
    return r.keys().map(r);
  }

  useEffect(() => {
    const strong = importAll(
      require.context("../assets/skills/strong", false, /\.(png|jpe?g|svg)$/)
    );
    const experienced = importAll(
      require.context(
        "../assets/skills/experienced",
        false,
        /\.(png|jpe?g|svg)$/
      )
    );
    setStrongSkills(strong);
    setExperiencedSkills(experienced);
  }, []);

  return (
    <section className="skills" id="skills">
      <h1>SKILLS</h1>
      <h3>Strong</h3>
      <div className="skillContainer">
        {strongSkills.map((skill) => (
          <img src={skill} alt="skill" key={skill} />
        ))}
      </div>
      <h3>Experienced</h3>
      <div className="skillContainer">
        {experiencedSkills.map((skill) => (
          <img src={skill} alt="skill" key={skill} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
