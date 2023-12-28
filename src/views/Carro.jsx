// Carro.js
import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { usePizzaContext } from '../context/PizzaContext';

const Carro = () => {
  const { state, dispatch } = usePizzaContext();

  const handleRemoveFromCart = (pizzaId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: { id: pizzaId } });
  };

  const pizzaReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const existingPizza = state.cart.find((pizza) => pizza.id === action.payload.id);
        if (existingPizza) {
          return {
            ...state,
            cart: state.cart.map((pizza) =>
              pizza.id === action.payload.id
                ? { ...pizza, quantity: pizza.quantity + 1 }
                : pizza
            ),
            total: state.total + action.payload.price,
          };
        } else {
          return {
            ...state,
            cart: [...state.cart, { ...action.payload, quantity: 1 }],
            total: state.total + action.payload.price,
          };
        }
  
      case 'SET_PIZZAS':
        return {
          ...state,
          pizzas: action.payload,
        };
  
        case 'REMOVE_FROM_CART':
          const removedPizza = state.cart.find((pizza) => pizza.id === action.payload.id);
        
          // Verificar si hay más de una pizza para reducir la cantidad o eliminar completamente
          if (removedPizza.quantity > 1) {
            const updatedCart = state.cart.map((pizza) =>
              pizza.id === action.payload.id
                ? { ...pizza, quantity: pizza.quantity - 1 }
                : pizza
            );
        
            return {
              ...state,
              cart: updatedCart,
              total: state.total - removedPizza.price,
            };
          } else {
            const updatedCart = state.cart.filter((pizza) => pizza.id !== action.payload.id);
            return {
              ...state,
              cart: updatedCart,
              total: state.total - removedPizza.price,
            };
          }
      default:
        return state;
    }
  };
  
  

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ListGroup>
        {state.cart.map((pizza) => (
          <ListGroup.Item key={pizza.id}>
            <img src={pizza.img} alt={pizza.name} style={{ maxWidth: '100px' }} />
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
