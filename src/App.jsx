import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/home';
import Project from './components/project';
import Experience from './components/experience';
import Skills from './components/skills';
import rakeshPhoto from './assets/rakesh.png'; 
import Footer from './components/footer';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/comp.css'
import './components/footer.css'

function App() {
  return (
    <div className='backcc'>
      <h1 className='personName fw-bold text-white p-4'>RAKESH REDDY NIMMALA</h1>
    <Router>
      <div className="container-fluid">
        <div className="row">
          {/* Sidebar Navigation */}
          <nav className="col-md-3 col-lg-2 bg-light sidebar">
            <img className= "profilePhoto" src={rakeshPhoto} alt="profile"></img>
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink
                  to="/" exact
                  className="nav-link"
                  activeclassname="active" // Add active class for styling
                >
                  About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/skills" className="nav-link" activeclassname="active">
                  Skills
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink to="/experience" className="nav-link" activeclassname="active">
                  Experience
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/project" className="nav-link" activeclassname="active">
                  Projects
                </NavLink>
              </li>
              
            </ul>
          </nav>
          {/* Main Content */}
          <main className="col-md-9 col-lg-10">
            
            <Routes>
              <Route path="https://nimmalarakeshreddy.github.io/portfolio_application/home" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/project" element={<Project />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
