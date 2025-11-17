import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Blinkit</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              <Link to={"/add-product"}>Add product</Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
