import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import './navbar.css'
function NavScroll() {
  return (
    <Navbar expand="lg" className="nav">
      <Container fluid>
        <Navbar.Brand href="#" className='n1'><b>NEWS API</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
         
            <Button  className='btn3'><Link to="/register"className='l4'>Sign Out</Link></Button>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;