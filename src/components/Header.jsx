import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AuthContext } from "../providers/AuthProbider";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Header() {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">CHEFSQUAD</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav>
          <Nav>
            {user && (
              <Nav.Link href="">
                <img
                  className="rounded-circle me-2"
                  style={{ height: "40px" }}
                  src={user.photoURL}
                  alt=""
                />
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            <Nav.Link href="">
              {user ? (
                <Link to="/login">
                  <Button onClick={handelLogOut} variant="dark">
                    LogOut
                  </Button>
                </Link>
              ) : (
                <div>
                  {" "}
                  <Link to="/login">
                    <Button variant="light me-2">Login</Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="light me-2">Register</Button>
                  </Link>
                </div>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
