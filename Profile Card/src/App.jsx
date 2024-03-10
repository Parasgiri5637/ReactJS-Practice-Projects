import "./App.css";

const skillsList = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git & GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <>
      <ProfileCard />
    </>
  );
}

function ProfileCard() {
  return (
    <div className="profile-card">
      <div className="card-detail">
        <img src="src\assets\hGdszCo0_400x400.jpg" alt="profile photo" />
        <p className="name">Jonas Schmedtmann</p>
        <p className="city">Portuguese</p>
        <p className="job-status">
          User interface designer and <br />
          front-end developer
        </p>
        <p className="instruction">
          You can Mail me or Watch my videos on Udmy.
        </p>

        <button className="mailbtn">Message</button>
        <button className="watchBtn">Watch</button>
      </div>

      <ProfileCard_Skill />
    </div>
  );
}

function ProfileCard_Skill() {
  return (
    <div className="skill">
      <h6 className="skill-text">skills</h6>
      <div className="skills-sets">
        <ul>
          {skillsList.map((skill, i) => (
            <Skills
              skill={skill.skill}
              color={skill.color}
              level={skill.level}
              key={i}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

function Skills({ skill, color, level }) {
  return (
    <>
      <li style={{ color: color }}>
        {skill}
        {level === "advanced" && "💪"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
      </li>
    </>
  );
}

export default App;
