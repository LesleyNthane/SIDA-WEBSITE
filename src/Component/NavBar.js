import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from '../Assets/img/SIDA-LOGO.png';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] =useState(false);

    useEffect( () => {
        const onScroll = () => {
            if (window.screenY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
        return (
    
            <Navbar expand="md">
                <Container className={scrolled ? "scrolled": ""}>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                            <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Our Services</Nav.Link>
                            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
}