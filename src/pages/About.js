import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Profile from '../images/about-me.png';
import '../styles/about.css';

function About() {

  const handleButtonClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    if(portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth'});
    }
  };

  return (
    <Container className="my-5">
      <Row className="about-me">
        <Col md={6}>
          <h1>About Me</h1>
          <hr></hr>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis neque quis ipsum laoreet commodo.
            Phasellus commodo, purus quis consectetur rhoncus, nibh nibh malesuada nibh, vel posuere odio nibh eu justo.
            Mauris egestas lorem eu leo interdum, id sollicitudin lectus malesuada. Vivamus eleifend tortor turpis, eget commodo libero posuere at.</p>
            <button onClick={handleButtonClick}>Go to Portfolio</button>
        </Col>
        <Col className="image-class" md={6}>
          <img src={Profile} alt="About me" className="img-fluid" />
        </Col>
      </Row>

    </Container>
  )
}

export default About;