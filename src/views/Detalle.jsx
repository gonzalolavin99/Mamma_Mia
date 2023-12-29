import React from "react";
import { usePizzaContext } from "../context/PizzaContext";
import { useParams } from "react-router-dom";
import { Button, ButtonGroup } from "react-bootstrap";

const Detalle = () => {
  const { state, dispatch } = usePizzaContext();
  const { id } = useParams();

  const pizza = state.pizzas.find((pizza) => pizza.id === id);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: pizza });
  };

  return (
    <div>
      <h2>{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <p>
        <strong>Ingredients: </strong>
        {pizza.ingredients.join(", ")}
      </p>
      <p>
        <strong>Price: </strong>${pizza.price.toFixed(2)}
      </p>
      <ButtonGroup>
        <Button variant="info" onClick={addToCart}>
          Añadir al Carrito
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Detalle;
