import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import TypeBar from "../components/typeBar";

const Shop = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;