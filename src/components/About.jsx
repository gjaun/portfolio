import React from 'react';
import Profile from '../assets/images/profile-resize-min.jpg';
import pdf from '../assets/documents/GichulJaun_Resume.pdf';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './About.module.css';

/*
File Name: About.jsx 
Student Name: Gichul Jaun
Student ID: 301375948
Course: COMP229-408
Date: October 1, 2024
*/

function About() {
  return (
    <main>
      <Container>
        <Row className="w-100 d-flex align-items-start py-sm-5">
          <Col>
            <h1>Gichul Jaun</h1>
            <ul>
              <li>
                Highly motivated and detail-oriented student enrolled in
                Software Engineering Technology (AI)
              </li>
              <li>
                Experienced in develop and deliver web projects using React.js,
                Sass, and API integrations{' '}
              </li>
              <li>
                Knowledgeable of Object-Oriented Programming, WCAG, and the
                application of the SDLC
              </li>
              <li>
                Possesses a solid understanding of Cybersecurity and data
                confidentiality, integrity and
              </li>
              <li>
                Demonstrated ability to collaborating with cross-functional
                teams and quickly learn new frameworks
              </li>
            </ul>
            <h5>Key Skills</h5>
            <ul>
              <li>Frontend: HTML, CSS, Sass, JavaScript, jQuery, React.js</li>
              <li>Backend: C#, Java, SQL</li>
              <li>
                Design & Collaboration: Web Design principles, WCAG, Adobe XD,
                Figma, Git, Github
              </li>
              <li>
                Other Tools: API Integrations, Postman, Firebase, Terminal,
                Visual Stuido Code, Jira
              </li>
            </ul>
            <a
              href={pdf}
              download="GichulJaun_Resume.pdf"
              className={styles['resume']}
            >
              Download Resume
            </a>
          </Col>
          <Col className="d-none d-md-block">
            <img src={Profile} alt="Profile image" />
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default About;
