import React from "react";
import { Navbar, Nav, Button, ButtonGroup } from "react-bootstrap";
import './Navbar.scss';

const Navigation = () => (
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#cartao">Cartão</Nav.Link>
      <Nav.Link href="#quem somos">Quem Somos</Nav.Link>
      <Nav.Link href="#faq">FAQ</Nav.Link>
    </Nav>
    <ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Acessar minha conta</Button>
  <Button variant="secondary">Abra sua conta</Button>
</ButtonGroup>
  </Navbar.Collapse>
</Navbar>
)

export default Navigation;