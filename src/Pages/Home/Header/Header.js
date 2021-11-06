import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Header = () => {
  const { logOut, user } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>fixed="top"
        <Navbar className="bg-dark " expand="lg" fixed="top">
          <Container>
            <Navbar.Brand as={NavLink} className="text-white" to="/home">
              <img width="140px" height="25px" className="rounded bg-dark" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBw0Aijeuu3NHxktyafmiW5dw-M4Bb65l-fmH_FDQkIZkRkGPpeJr_Yj_3niuzpXlQZAc&usqp=CAU" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto align-items-center fs-5 color">
                <Nav.Link as={NavLink} to="/home" className="text-white">
                  Home
                </Nav.Link>

                <Nav.Link as={NavLink} to="/about" className="text-white">
                  About
                </Nav.Link>

                <Nav.Link as={NavLink} to="/services" className="text-white">
                  Services
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact" className="text-white">
                  Contact
                </Nav.Link>

               { 
                 user.email ? (
                   
                  <>
                  <span className="text-light">{user.displayName}</span> 
                  <button className="btn btn-danger btn-white" onClick={logOut}>logout</button>
                
                </>
                 ) :<>
                 <Nav.Link as={NavLink} to="/login" className="text-white">
                  Login
                </Nav.Link>

                 </>
               }

              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <br /><br /> <br />
      </div>
    </div>
  );
};

export default Header;