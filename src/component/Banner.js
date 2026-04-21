import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import mycar from "../assets/mycar.png";
export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {"Hi! I'm Moaz"} <span className="wrap">Web Developer</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet fugit iste nobis tempora obcaecati possimus distinctio.
            </p>
            <button onClick={() => console.log('connect')}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={mycar} alt="mycar" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

 