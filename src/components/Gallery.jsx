  // Gallery.js
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { usePizzaContext } from '../context/PizzaContext';

const Gallery = () => {
  const { dispatch } = usePizzaContext();
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Simulando una llamada a una API (puedes reemplazar esto con una llamada real a tu API)
    const fetchData = async () => {
      try {
        // Simulamos la carga de datos desde un archivo JSON
        const response = await fetch('/pizzas.json');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const addToCart = (pizza) => {
    dispatch({ type: 'ADD_TO_CART', payload: pizza });
  };

  return (
    <div className="card-container">
      {pizzas.map((pizza) => (
        <Card key={pizza.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text>
              <strong>Ingredients: </strong>
              {pizza.ingredients.join(', ')}
            </Card.Text>
            <Card.Text>
              <strong>Price: </strong>${pizza.price.toFixed(2)}
            </Card.Text>
            <Button variant="info" onClick={() => addToCart(pizza)}>
              Añadir al Carrito
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
