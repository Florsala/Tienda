import { Button, CardContent, Container, Typography, Card } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";
import img4 from "../img/fotoBeagle.jpg";

const Cart = () => {
  let empty = "false";

  const { cart, clearCart, removeItem } = useContext(cartContext);

  return (
    <Container>
      <Typography variant="h4" color="text.secondary" marginTop={12}>
        ¡Arma tus valijas! La Patagonia te espera...
      </Typography>
      
        <img className='fotoInicio'
            src= {img4}
                     
            loading="lazy"/>
          


      {cart.map((i) => (
        <>
          <Card key={i.id}>
            <CardContent>
            <Typography variant="h5">{i.title} </Typography>
            <Typography variant="h6"> AR${i.price}</Typography>
            <Typography>Cantidad: {i.quantity}</Typography>
           
            </CardContent>
           
          
          
          </Card>
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
          <Link to="/Excursiones">
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
