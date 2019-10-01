import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export function Food(props) {
  return (
    <Container>
      <Row className="menuPage">
        <Col className="menuItems" xs={9}>
          <Row>
            <h1>Menu</h1>
          </Row>
          <Row>
            <Col className="halfChicken" xs={4}>
              <img
                src="/static/Menu_Nav-Image-Thumb_IM_HalfChicken.png"
                alt="Chicken"
              />
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
          <Row>
            <h3>Order</h3>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
