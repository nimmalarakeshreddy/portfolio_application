import React from 'react';
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
  return (
    <footer className="footer mt-0 ">
      <div className="footer-content">
        <ul className="footer-icons">
            <li>
            © 2024 My Portfolio | Connect:
            </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rakeshn7/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li> |
          <li>
            <a
              href="mailto:rakeshreddynimmala7@gmail.com"
              target="_blank"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li> |
          <li>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
