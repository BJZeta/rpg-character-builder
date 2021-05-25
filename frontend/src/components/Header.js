import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
              <Nav>
                  <LinkContainer to="/d&d">
                      <Nav.Link>
                          <img src="/images/dnd-logo.png" alt="dnd page" width="20px"/>
                      </Nav.Link>
                  </LinkContainer>
              </Nav>
          </Container>
      </Navbar>
    </header>
  );
};

export default Header;
