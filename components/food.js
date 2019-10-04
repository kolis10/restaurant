import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

export function Food(props) {
  return (
    <Container>
      <Row className="menuPage">
        <Col className="menuItems" lg={9}>
          <Row>
            <h1>Menu</h1>
          </Row>
          <Row>
            {props.menuitems.map(item => (
                <Col xs={4}>
                <h4>{item.name}</h4>
                <img
                    src={"/static/"+item.image}
                    alt="Yummy"
                />
                <span>{item.description}</span>
                <h6>{item.price}</h6>
                <Button variant="success" onClick={() => props.onOrderAdd(item)} >Add to Order</Button>
                </Col>
            ))}
          </Row>
        </Col>
        <Col lg={3}>
          <Row className="orders">
            <h3>Order</h3>
          </Row>

            {props.orderItems.map(item => (
                <Row className="order-up">
                    <Col xs={2}>{item.count}</Col>
                    <Col xs={6}>
                        {item.name}
                    </Col>
                    <Col xs={4}>
                        {item.price}
                    </Col>
                </Row>
            ))
            }
          <Button variant="primary" onClick={(props.onFinish)} >Finished</Button>
        </Col>
      </Row>
    </Container>
  );
}
