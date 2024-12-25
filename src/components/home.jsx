import React from 'react'
import Typewriter from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';

const home = () => {
    const navigate = useNavigate(); 
    const education = [
      {
        degree: "Master of Computer Science",
        institution: "Western Illinois University",
        location: "Macomb, Illinois",
        period: "Aug 2022 - May 2024",
        gpa: "GPA: 3.5/4",
      },
      {
        degree: "Bachelor of Technology in Computer Science and Engineering",
        institution: "Bharat Institute of Engineering and Technology",
        location: "Hyderabad, India",
        period: "Aug 2017 - Sep 2021",
        gpa: "GPA: 3.0/4",
      },
    ];
  
  return (
    <section>
        <div>
            <h3 className= "typewr">       
         <Typewriter 
          options={{
            strings: ['Full-Stack Web Developer', 'Skilled in React, JavaScript, and Node', 'Web Developer' , 'Boosting User Engagement Through Scalable Solutions' , 'Responsive Web Design' , 'Freelancer'],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
        </h3>
         
        </div>
        <p className="Summary"> I am a dedicated and innovative Software Developer with over two years of experience in full-stack web development. I specialize in building dynamic, user-focused web applications and optimizing digital solutions using technologies like JavaScript, React.js, Vue.js, and WordPress. My expertise extends to database management, cloud platforms such as AWS, and leveraging modern frameworks to deliver scalable and high-performance applications.
          <br></br>
        I hold a Master of Computer Science from Western Illinois University, where I graduated in May 2024 with a GPA of 3.5/4. During my time there, I developed a strong technical foundation and worked on impactful projects such as a Dining Table Reservation System, which streamlined operations for hotel management through an intuitive full-stack web application. My academic journey began with a Bachelor of Technology in Computer Science and Engineering from Bharat Institute of Engineering and Technology in Hyderabad, India, where I built a solid foundation in programming and software development.
        <br></br>
        Throughout my career, I have demonstrated a strong ability to optimize website performance, streamline operations with CRM systems, and collaborate with cross-functional teams to drive innovation. My technical accomplishments include reducing page load times by 40%, enhancing customer satisfaction by 25%, and developing automation scripts that significantly improved operational efficiency.
        <br></br>
        Beyond my professional experience, I am passionate about creating intuitive digital experiences and continuously exploring cutting-edge technologies. Whether developing custom WordPress solutions, integrating RESTful APIs, or exploring machine learning applications, I strive to align technology with business objectives to deliver impactful results.

    </p>


    <h3 className="typewr mt-4">Education</h3>
      <div className="row mt-4">
        {education.map((edu, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{edu.degree}</h5>
                <h6 className="card-subtitle mb-2">{edu.institution}</h6>
                <p className="mb-1">{edu.location}</p>
                <p className="mb-1">{edu.period}</p>
                <p className="text-secondary">{edu.gpa}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4 d-flex justify-content-center align-items-center text-center">
             <button  onClick={() => navigate('/Project')} className="btn btn-outline-light btn-lg">Projects</button>
        &nbsp; &nbsp;
             <button  onClick={() => navigate('/Experience')} className="btn btn-custom btn-lg">Work Experience</button>
             </div>
        <div className="col-sm-4"></div>
    </div>

    <br></br>
    <br>
    </br>
    <br></br>
    </section>
  )
}

export default home