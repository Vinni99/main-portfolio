import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../styles/portfolio.css";


function Portfolio({ data }) {


    return (
        <Container className="my-5">
            <Row className="portfolio">
                <Col md={12}>
                    <h1 className="title-header">Welcome to my Portfolio</h1>
                    <hr></hr>
                    <p>Check out some of my projects!</p>
                </Col>
            </Row>
            <Row className="cardEl">
                {data.portfolio.map((project, index) => (
                    <Card key={index} className="card" style={{ width: '28rem' }}>
                        <Card.Img className="image-card" variant="top" src={project.src} alt={project.title} />
                        <Card.Body>
                            <Card.Title className="title">-{project.title}</Card.Title>
                            <Card.Text className="description">
                                {project.description}
                            </Card.Text>
                            <Card.Text className="tools">
                                {project.tools ? project.tools.join(" | ") : ""}
                            </Card.Text>
                        </Card.Body>
                        <button className="btn">View in GitHub</button>
                    </Card>
                ))}
            </Row>
        </Container>
    )
}
export default Portfolio;