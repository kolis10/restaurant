import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Navigation } from "../components/nav";
import { Orders } from "../components/orders";
import fetch from "isomorphic-unfetch";
import "./styles.css";
import uuid4 from "uuid4";

function Chefside(props) {
    return (
    <Col>
      <Navigation />
      <Orders orders={props.orders}/>
    </Col>
    );
}

Chefside.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.codexsw.dev/api/list?collection=orders')
  return await res.json()

}

export default Chefside