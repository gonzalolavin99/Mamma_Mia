// Carro.js
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { usePizzaContext } from '../context/PizzaContext';

const Carro = () => {
  const { state, dispatch } = usePizzaContext();

  const handleRemoveFromCart = (pizzaId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: pizzaId } });
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ListGroup>
        {state.cart.map((pizza) => (
          <ListGroup.Item key={pizza.id}>
            {pizza.name} - Cantidad: {pizza.quantity}
            <Button variant="danger" onClick={() => handleRemoveFromCart(pizza.id)}>
              Eliminar
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <p>Total: ${state.total.toFixed(2)}</p>
    </div>
  );
};

export default Carro;
