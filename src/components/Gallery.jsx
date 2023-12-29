import React, { useState, useEffect } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import { usePizzaContext } from '../context/PizzaContext';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const { dispatch } = usePizzaContext();
  const [pizzas, setPizzas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
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

  const viewDetails = (pizzaId) => {
    navigate(`/detalle/${pizzaId}`);
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
            <ButtonGroup>
            <Button variant="info" onClick={() => addToCart({ ...pizza, id: pizza.id.toString() })}>
  Añadir al Carrito
</Button>

              <Button variant="secondary" onClick={() => viewDetails(pizza.id)}>
                Ver Más
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
