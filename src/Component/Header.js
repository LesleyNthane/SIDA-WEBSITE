import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../Assets/img/SIDA-LOGO.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Associates", href: "#associates" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header style={{ position: "fixed", top: 0, width: "100%", zIndex: 1030 }}>
      <Navbar
        expand="md"
        bg="light"
        variant="light"
        className="border-bottom shadow-sm backdrop-blur-sm"
      >
        <Container>
          {/* Logo */}
          <Navbar.Brand href="#home" className="d-flex align-items-center gap-2">
            
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          {/* Mobile Menu Toggle */}
          <button
            variant="light"
            className="d-md-none nav-but-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            =
          </button>

          {/* Desktop Menu */}
          <Navbar.Collapse className="d-none d-md-flex justify-content-end">
            <Nav className="me-3">
              {navItems.map((item) => (
                <Nav.Link key={item.name} href={item.href} className="fw-medium">
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
            <a href="#contact"><button className="GetQuoteButton">Get Quote</button></a>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-light border-top d-md-none px-4 py-3">
          <nav className="d-flex flex-column gap-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-dark fw-medium text-decoration-none"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#contact">
              <button className="GetQuoteButton">
                Get Quote
              </button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

