import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./navbar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-container">
      <Container>
        <Navbar.Brand href="/" className="brand-container">
          <img
            alt=""
            src="/logo.jpeg"
            className="d-inline-block align-top logo"
          />{" "}
          <p>
            <span id="blog-owner-name">Evariste Musekwa</span>

            <span id="blog-owner-profession">Web Technologist</span>
          </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav className="navbar-collapsed">
            <Nav.Link className="link" href="/posts">
              All Posts
            </Nav.Link>
            <Nav.Link className="link" eventKey={2} href="/portfolio">
              Portfolios
            </Nav.Link>
            <Nav.Link className="link" href="/me">
              About Me
            </Nav.Link>
            {/* <Nav.Link className="link" href="/post">
              Post
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
