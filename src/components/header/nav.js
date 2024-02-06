import Nav from "react-bootstrap/Nav";

function TabsExample() {
  return (
    <div style={{ marginTop: "60px" }}>
      <Nav variant="tabs" defaultActiveKey="/home" f>
        <Nav.Item>
          <Nav.Link href="/home">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Option 2</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default TabsExample;
