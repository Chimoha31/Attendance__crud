import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="success" variant="dark" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">Remote / In person</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
