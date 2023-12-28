import React, { createContext, useContext, useReducer, useEffect } from 'react';

const PizzaContext = createContext();

const initialState = {
  cart: [],
  total: 0,
  pizzas: [], // Agrega la propiedad pizzas al estado inicial
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
    case 'SET_PIZZAS':
      return {
        ...state,
        pizzas: action.payload,
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

  // Simula la carga de pizzas desde una API (puedes reemplazar esto con una llamada real a tu API)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/pizzas.json');
        const data = await response.json();
        dispatch({ type: 'SET_PIZZAS', payload: data });
      } catch (error) {
        console.error('Error fetching pizzas:', error);
      }
    };

    fetchData();
  }, []);

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
