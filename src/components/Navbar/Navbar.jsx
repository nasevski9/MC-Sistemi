import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.png";
import "./navbar.css";

export default function NavBar() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
      <div
        className="d-flex align-items-center justify-content-between mx-auto w-100 px-4"
        style={{ maxWidth: "1200px" }}
      >
        <Navbar.Brand
          onClick={() => scrollToSection("home-section")}
          style={{ cursor: "pointer" }}
          className="nav-img"
        >
          <img src={logo} alt="MC Sistemi Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="me-3">
            <Nav.Link onClick={() => scrollToSection("services-section")}>
              Услуги
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("why-choose-us-section")}>
              Зошто ние?
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection("contact-section")}>
              Контакт
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
