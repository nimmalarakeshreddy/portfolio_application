import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    title: "Dining Table Reservation System",
    period: "Jan 2023 – May 2023",
    description: [
      "Built a full-stack web application enabling table reservations for hotels, enhancing operational efficiency.",
      "Designed a user-friendly interface and a real-time dashboard for hotel management.",
    ],
  },
  {
    title: "Big Mart Sales Prediction Using Machine Learning",
    period: "Dec 2020 – Jul 2021",
    description: [
      "Analyzed historical sales data using Python to predict future trends and optimize operations.",
      "Delivered actionable insights through regression models and business intelligence tools.",
    ],
  },
  {
    title: "Voice Prescription Using Python",
    period: "Jun 2020 – Dec 2020",
    description: [
      "Created a voice-based prescription system for doctors, reducing errors and enhancing efficiency.",
      "Automated prescription delivery via email using Python’s speech recognition libraries.",
    ],
  },
];

const Project = () => (
  <div className="container">
    <h2 className="typewr">Projects</h2>
    <div className="row g-4">
      {projects.map((project, index) => (
        <div className="col-md-4" key={index}>
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{project.title}</h5>
              <h6 className="card-subtitle">{project.period}</h6>
              <ul className="list-unstyled mt-3">
                {project.description.map((detail, idx) => (
                  <li key={idx}>
                    {/* <i className="bi bi-check-circle-fill text-success me-2"></i> */}
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Project;
