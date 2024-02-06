import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ListItems = ({ data }) => {
  return (
    <Card style={{ width: "16rem" }}>
      <Card.Img variant="top" src={`./assets/images/${data.image}`} />
      <Card.Body>
        <Card.Text>
          <span>{data.discountedPrice}</span>
          <small>
            <strike>{data.price}</strike>
          </small>
        </Card.Text>
        <Card.Title>{data.title}</Card.Title>
        <div className="d-grid">
          <Button
            variant="danger"
            size="lg"
            onClick={() => {
              console.log("clicked", data);
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>Add To Cart</span>
              <img src="./assets/icons/add_cart.svg" />
            </div>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ListItems;
