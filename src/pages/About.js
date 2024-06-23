import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutMe from '../img/profile.pic.png';
import '../styles/about.css';

function About({ handleButtonClick }) {

  return (
    <Container className="my-5">
      <Row className="about-me">
        <Col md={6}>
          <h1>About Me</h1>
          <hr></hr>
          <p>
            Hey there, I'm Vinni. Enthusiastic Full Stack Developer ready to embark on my first professional adventure in the tech industry.
            My journey so far has been filled with coding, learning, and building projects that I'm proud of.
            Now, I'm looking for a chance to bring my skills to a forward-thinking, collaborate, grow and create innovative solutions.
            Let's start something great!
          </p>
        </Col>
        <Col className="image-class" md={6}>
          <img src={AboutMe} alt="about-me" className="img-fluid" />
        </Col>
      </Row>
      <button className="button" onClick={handleButtonClick}>View my work</button>
    </Container>
  )
}

export default About;