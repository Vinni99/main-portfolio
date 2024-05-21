import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Portfolio() {
    return (
        <Container id="portfolio" className="my-5">
            <Row className="portfolio">
                <Col md={6}>
                    <h1>Portfolio</h1>
                    <hr></hr>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis neque quis ipsum laoreet commodo.
                        Phasellus commodo, purus quis consectetur rh);
                    </p>
                </Col>
            </Row>
        </Container>
    )
}
export default Portfolio;