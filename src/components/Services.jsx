import { Container, Row, Col } from 'react-bootstrap';

/*
File Name: Services.jsx 
Student Name: Gichul Jaun
Student ID: 301375948
Course: COMP229-408
Date: October 1, 2024
*/

function Services(props) {
  return (
    <main>
      <Container>
        <Row className="w-100 py-sm-5">
          <Col>
            <h3>Custom Software Develpment</h3>
            <ul>
              <li>
                Develop tailored applications to meet specific business needs
              </li>
              <li>Java, C#, Python, etc.</li>
            </ul>
            <h3>Database Design and Management</h3>
            <ul>
              <li>
                Design, implement, and manage relational or NoSQL databases
              </li>
              <li>Oracle MySQL, MongoDB, etc.</li>
            </ul>
            <h3>Debugging and Troubleshooting</h3>
            <ul>
              <li>Identify and fix bugs in applications</li>
              <li>Java, C#, Python, etc.</li>
            </ul>
            <h3>Web Development</h3>
            <ul>
              <li>
                Develop fully customized websites tailored to business needs
              </li>
              <li>HTML, CSS, JavaScript, React.js, etc.</li>
            </ul>
            <h3>UI/UX Design</h3>
            <ul>
              <li>
                Design user-friendly, visually appealing web interfaces focusing
                on user experience
              </li>
              <li>Figma, Adobe XD, etc.</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Services;
