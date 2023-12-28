// Bar.js
import React from 'react';
import { Navbar, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { usePizzaContext } from '../context/PizzaContext';

const Bar = () => {
  const { state } = usePizzaContext();

  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/">
        <Navbar.Brand>Mamma Mia!</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Text>
          <Link to="/carro">
            Carrito <Badge variant="info">{state.cart.length}</Badge>
          </Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Bar;
