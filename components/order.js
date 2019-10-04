import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

export function Order({ order, onFinished }) {
    return (
                            <Card style={{ width: '18rem'}}>
                                <Card.Body>
                                    <Card.Title>Customer Name</Card.Title>
                                    <Card.Text>
                                        {order.items.map(item => (
                                            <Row>
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
                                    </Card.Text>
                                    <Card.Text>{order.items.map(item => item.price).reduce((a, b) => a + b, 0)}</Card.Text>
                                    <Button variant="success" onClick={() => onFinished(order)}>Completed</Button>
                                </Card.Body>
                            </Card>
    );
}

