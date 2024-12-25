import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const experiences = [
  {
    company: "HCFMS Pvt Ltd",
    location: "Hyderabad, India",
    position: "Full Stack Web Developer",
    period: "Jun 2023 – Dec 2023",
    url: "https://www.hcfmspvtltd.com/",
    details: [
      "Engaged in a freelancing project, providing partial support in developing a staffing and recruitment website utilizing the PHP CodeIgniter framework.",
      "Facilitated the hosting process, ensuring seamless deployment and optimal performance through configuration of web servers and database management.",
      "Implemented scalability features for handling growing traffic and data volume.",
      "Conducted performance optimization, including speed improvements and SEO enhancements.",
      "Tested and debugged the website post-launch, ensuring stability, security, and proper functionality.",
    ],
  },
  {
    company: "Vision Prime Services",
    location: "Hyderabad, India",
    position: "Full Stack Web Developer",
    period: "Sep 2022 – Sep 2022",
    url: "https://visionprimeservices.com/",
    details: [
      "Developed a professional freelance website using WordPress, tailored to client requirements.",
      "Incorporated custom plugins and functionalities to enhance the user experience.",
      "Focused on creating a responsive design compatible with multiple devices and browsers.",
      "Conducted website optimization, improving loading speed and overall performance.",
    ],
  },
  {
    company: "Multiplier Solutions",
    location: "Hyderabad, India",
    position: "Software Application Developer",
    period: "Mar 2022 – Jul 2022",
    details: [
      "Developed and optimized web applications using React.js, JavaScript, PHP, and WordPress.",
      "Designed reusable React components and implemented RESTful APIs for seamless data integration.",
      "Collaborated with a team to implement new features, reducing bugs by 40% and increasing customer satisfaction by 25%.",
      "Executed automated email and WhatsApp campaigns using Python scripting.",
    ],
  },
  {
    company: "Multiplier Solutions",
    location: "Hyderabad, India",
    position: "Software Developer Executive",
    period: "May 2021 – Feb 2022",
    details: [
      "Leveraged JavaScript ES6+ features to create clean, maintainable code.",
      "Built interactive dashboards with React.js for real-time data visualization.",
      "Designed chatbots using TypeScript for lead generation and customer support.",
      "Administered Vtiger CRM user accounts, streamlining processes and improving security.",
    ],
  },
];

const ExperienceTimeline = () => (
  <div className="container">
    <h2 className="typewr">Professional Experience</h2>
    <ul className="timeline list-unstyled">
      {experiences.map((exp, index) => (
        <li key={index} className="mb-5">
          <div className="d-flex flex-column">
            <h5 className="text-white texts">{exp.position}</h5>
            <h6 className="text-white texts">{exp.company} | {exp.location}</h6>
            {/* <p className="mb-0 text-secondary">{exp.location}</p> */}
            <p className="text-white">
              {exp.period} | <a href={exp.url} target="_blank" rel="noreferrer">Visit Website</a>
            </p>
            <ul className="text-white">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceTimeline;
