import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const Navb = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='py-3' >
            <nav className="navbar navbar-dark bg-dark py-0 ">
                <a className="navbar-brand" href="#home">
                <img src='/byakkoLogo.png' alt='byakko' className='logo' />
                </a>
            </nav>

            <Container className='containerNav'>
                <Navbar.Brand href="#home"><b className='byakkoFont' >BYAKKO YAMA</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='responsive-navbar-nav1'>
                    <Nav className="me-auto">
                        <Nav.Link href="#inicio">Inicio</Nav.Link>
                        <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                        <Nav.Link href="#servicios">Servicios</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                        <NavDropdown title="Normativa" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="me-auto left">
                        <Nav.Link className="ingresar" href="#ingresar">Ingresar</Nav.Link>
                        <Nav.Link eventKey={2} href="#registrase">
                            registrarse
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
            </Container>
        </Navbar>
    );
}