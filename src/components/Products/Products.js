import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListItems from "./ListItems.js/ListItems";
const Products = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ListItems
              data={{
                image: "placeholder.png",
                price: "450",
                discountedPrice: "340",
                title: "Title 1",
              }}
            />
          </Col>
          <Col>
            <ListItems
              data={{
                image: "placeholder.png",
                price: "200",
                discountedPrice: "150",
                title: "Title 2",
              }}
            />
          </Col>
          <Col>
            <ListItems
              data={{
                image: "placeholder.png",
                price: "650",
                discountedPrice: "500",
                title: "Title 3",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
