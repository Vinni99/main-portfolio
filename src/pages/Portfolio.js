import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Portfolio() {
    return (
        <Container className="my-5">
            <Row className="portfolio">
                <Col md={6}>
                    <h1>Portfolio</h1>
                    <hr></hr>
                    <p>Check out some of my projects!</p>
                </Col>
            </Row>
        </Container>
    )
}
export default Portfolio;