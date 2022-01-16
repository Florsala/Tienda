import { Button, Container, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";

const Cart = () => {
  let empty = "false";

  const { cart, total, clearCart, removeItem } = useContext(cartContext);

  return (
    <Container>
      <Typography variant="h4" color="text.secondary" margin={15}>
        ¡Arma tus valijas! La Patagonia te espera...
      </Typography>

      {cart.map((i) => (
        <>
          <div key={i}> {i}</div>
          <Button
            onClick={() => {
              removeItem(i);
            }}
          >
            Eliminar
          </Button>
        </>
      ))}

      <Button
        onClick={() => {
          clearCart((empty = "true"));
        }}
      >
        Vaciar mi carrito
      </Button>

      {empty && (
        <>
          <Link to="/">
            <Button color="secondary" variant="contained" m={5} size="small">
              Volver al inicio
            </Button>
          </Link>
        </>
      )}
    </Container>
  );
};

export default Cart;
