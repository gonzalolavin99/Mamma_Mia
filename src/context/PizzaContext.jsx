// PizzaContext.js
import React, { createContext, useContext, useReducer } from 'react';

const PizzaContext = createContext();

const initialState = {
  cart: [],
  total: 0,
};

const pizzaReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingPizza = state.cart.find((pizza) => pizza.id === action.payload.id);
      if (existingPizza) {
        existingPizza.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        total: state.total + action.payload.price,
      };
    case 'REMOVE_FROM_CART':
      // Implementar la lógica para reducir la cantidad o eliminar del carrito
      return state;
    default:
      return state;
  }
};

const PizzaProvider = ({ children }) => {
  const [state, dispatch] = useReducer(pizzaReducer, initialState);

  return (
    <PizzaContext.Provider value={{ state, dispatch }}>
      {children}
    </PizzaContext.Provider>
  );
};

const usePizzaContext = () => {
  const context = useContext(PizzaContext);
  if (!context) {
    throw new Error('usePizzaContext must be used within a PizzaProvider');
  }
  return context;
};

export { PizzaProvider, usePizzaContext };
