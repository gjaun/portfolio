import Coding from '../assets/images/coding-small.jpg';
import Coding2 from '../assets/images/coding-small-2.jpg';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home(props) {
  return (
    <main>
      <Container>
        <Row className="w-100 d-flex align-items-center">
          <Col>
            <div>
              <h1>Hello</h1>
              <h3>My name is Gichul Jaun</h3>
              <h5>Software Engineering Student in Centennial College</h5>
              <Link to="/contact">
                <Button variant="outline-dark" size="sm">
                  Contact me
                </Button>
              </Link>
            </div>
          </Col>
          <Col className="py-2">
            <Carousel fade>
              <Carousel.Item interval={2000}>
                <img
                  src={Coding}
                  alt="Coding stock image"
                  className={styles['carousel-img']}
                />
                <Carousel.Caption>
                  <h3>Programming</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  src={Coding2}
                  alt="Coding stock image"
                  className={styles['carousel-img']}
                />
                <Carousel.Caption>
                  <h3>Programming</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Home;
