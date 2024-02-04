import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListItems from "./ListItems.js/ListItems";
const Products = () => {
  const items = [
    {
      image: "placeholder.png",
      price: "450",
      discountedPrice: "340",
      title: "Title 1",
    },
    {
      image: "placeholder.png",
      price: "200",
      discountedPrice: "150",
      title: "Title 2",
    },
    {
      image: "placeholder.png",
      price: "650",
      discountedPrice: "500",
      title: "Title 3",
    },
  ];
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <ListItems data={items[0]} />
          </Col>
          <Col>
            <ListItems data={items[1]} />
          </Col>
          <Col>
            <ListItems data={items[2]} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Products;
