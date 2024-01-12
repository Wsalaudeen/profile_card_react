import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar photoName="olanrewaju.jpg" name="profile-picture" />
      <div className="data">
        <Intro
          name="Salaudeen olanrewaju"
          text="full-stack web developer and teacher at udemy.When not coding or preparing a course i like to play board games to cook and eat,or to enjoy portuguese sun."
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar({ photoName, name }) {
  return (
    <header>
      <img src={photoName} alt={name} className="avatar" />
    </header>
  );
}

function Intro({ name, text }) {
  return (
    <main>
      <h1>{name}</h1>
      <p>{text}</p>
    </main>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="Html+Css" emoji="💪" color="orangered" />
      <Skill skill="Web dev" emoji="💪" color="lightblue" />
      <Skill skill="Javascript" emoji="💪" color="yellow" />
      <Skill skill="Svelte" emoji="💪" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
