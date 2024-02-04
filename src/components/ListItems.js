import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ListItems = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="./assets/images/placeholder.png" />
      <Card.Body>
        <Card.Text>
          <span>Rs. 340</span>
          <small>
            <strike>450</strike>
          </small>
        </Card.Text>
        <Card.Title>Title of Item</Card.Title>
        <div className="d-grid">
          <Button variant="danger" size="lg">
            <span>Add To Cart</span>
            <img src="./assets/icons/add_cart.svg" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ListItems;
