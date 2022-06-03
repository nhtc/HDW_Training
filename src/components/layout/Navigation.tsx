import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { NavigationProps } from '../../interface';

const Navigation = (props: NavigationProps) => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/800px-Pokebola-pokeball-png-0.png"
              alt=""
              width="50"
              height="50"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="collection">
                Collection
              </Nav.Link>
              <Nav.Link as={NavLink} to="admin">
                Admin
              </Nav.Link>
              <Nav.Link as={NavLink} to="carts">
                Carts
              </Nav.Link>
            </Nav>
            {!props.isLog ? (
              <Nav>
                <Nav.Link
                  as={NavLink}
                  onClick={() => props.updateLogIn(!props.isLog)}
                  to="/"
                >
                  Login
                </Nav.Link>{' '}
              </Nav>
            ) : (
              <Nav>
                <Nav.Link
                  as={NavLink}
                  onClick={() => props.updateLogIn(!props.isLog)}
                  to="/"
                >
                  Logout
                </Nav.Link>{' '}
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
