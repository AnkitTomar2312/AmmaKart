import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function AutoLayoutExample() {
  return (
    <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Product name, category"
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default AutoLayoutExample;
