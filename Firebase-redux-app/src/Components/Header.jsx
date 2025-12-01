import { Container, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { signOutAsync } from "../services/actions/authAction";

const Header = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.authReducer);
  const handleLogOut = () => {
      dispatch(signOutAsync());
  }
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Blinkit</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-center">
            <Navbar.Text>
              {user ? <Link to={"/add-product"}>Add product</Link> : ""}
            </Navbar.Text>
          </Navbar.Collapse>
          <Navbar.Text>
              {
                !user ? <Link className="btn btn-warning" to={"/signin"}>SignIn</Link> :
                <div>
                  <p>{user.displayName}</p>
                  <button onClick={handleLogOut}>LogOut</button>
                </div>
              }
            </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
