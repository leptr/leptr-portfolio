import SkillItem from "./elements/SkillItem";
import Skills from "./data/Skills";

const About = () => {
  return (
    <div className="full-page about light" id="about">
      <div className="section-title no-select">About Me</div>
      <div className="sub-container">
        <div className="about-text">
          My name is <span className="important">Petar</span> and I come from{" "}
          <span className="important">Belgrade, Serbia</span>.
        </div>
        <div className="about-text">
          I craft straightforward and easily navigable websites, characterized by their sleek and user-friendly design.
          I am passionate about creating online experiences that seamlessly blend simplicity with accessibility,
          ensuring a professional and engaging interface for users.
        </div>
        <div className="about-text">
          I discovered my passion for programming and web development at the age of 15. Ever since then, I have always
          been eager to challenge myself and expand my knowledge as much as possible.
        </div>
        <div className="skills-main-container no-select">
          <div className="skills-text">These are all of the technologies I feel comfortable with:</div>
          <div className="skills-container">
            {Skills.map((skill) => {
              return <SkillItem name={skill.name} src={skill.src} key={skill.key} />;
            })}
          </div>
        </div>
        <div className="about-text">
          If this sounds like the profile of a person you would like to work with, feel free to{" "}
          <a className="inline-link important" href="#contact">
            contact me!
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
