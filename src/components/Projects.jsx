import { projectList } from '../projectlist/projectlist';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './projects.module.css';

function Projects(props) {
  const projects = projectList;
  const rows = [];
  for (let i = 0; i < projects.length; i += 2) {
    rows.push(projects.slice(i, i + 2));
  }

  return (
    <main>
      <Container>
        {rows.map((rowItems, rowIndex) => (
          <Row
            key={rowIndex}
            className="w-100 d-flex justify-content-center py-sm-5"
          >
            {rowItems.map((item) => (
              <Col
                key={item.id}
                className="w-100 d-flex flex-column justify-content-between"
              >
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <img
                  src={item.img}
                  alt={`${item.title}'s image`}
                  className={`d-none d-md-block ${styles['img']}`}
                />
                <div>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    Live link
                  </a>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </main>
  );
}

export default Projects;
