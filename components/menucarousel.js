import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";

export function MenuCarousel() {
  return (
    <Container>
      <Row>
        <Carousel className="carouselSlide">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/static/CarouselAppetizer.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Appetizers</h3>
              <p>
                Try our delicious new (Tomatoes and Herbs on Toast) for some
                amount of money.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/static/CarouselEntree.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Eyecatching Entrees</h3>
              <p>
                Don't forget to check out our new Halloween themed meals (Now
                through November 7th)
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/static/CarouselDessert.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Decadent Desserts</h3>
              <p>Satisfy your sweet tooth</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
}
