import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const skills = {
  "Programming Languages": ["Java", "Python", "HTML", "CSS", "PHP", "JavaScript (ES6+)", "TypeScript", "SQL"],
  "Front-End Development": ["React.js", "Vue.js", "Bootstrap", "jQuery", "Elementor", "Next.js", "WordPress", "SEO", "UI/UX Design", "Responsive Web Design"],
  "Back-End & Frameworks": ["Node.js", "Laravel", "PHP CodeIgniter", "WooCommerce", "Ajax", "RESTful APIs"],
  "Tools": ["GitHub", "Postman", "VS Code", "Dreamweaver", "Jupyter", "Mailgun", "Eclipse"],
  "Cloud & Databases": ["AWS", "MySQL", "Vtiger CRM"],
};

const SkillCard = ({ title, skills }) => (
  // <section>
  <div className="col-md-4 mb-4">
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5 className="card-title text-decoration-underline">{title}</h5>
        <ul className="list-unstyled">
          {skills.map((skill, index) => (
            <li key={index}>
              <i className="bi bi-check-circle-fill text-success me-2"></i>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  // </section>
);

const Skills = () => {
  return (
    <div className="container">
      <h3 className="typewr">My Skills</h3>
      <div className="row">
        {Object.entries(skills).map(([category, skillList], index) => (
          <SkillCard key={index} title={category} skills={skillList} />
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};

export default Skills;
