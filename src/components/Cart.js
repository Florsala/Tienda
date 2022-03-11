import {
  Button,
  CardContent,
  Container,
  Typography,
  Card,
} from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DeleteIcon from "@mui/icons-material/Delete";
import Pingui from "../img/pingui.png"

const Cart = () => {
  let empty = "false";

  const { cart, clearCart, removeItem, addTotal, total } =
    useContext(cartContext);



  const message = (
    <div className="cartContainer">


      <Typography
        variant="h6"
        color="text.secondary"
        marginTop={3}
        marginBottom={4}
      >
        ¡Ups! Tu carrito está vacío...
      </Typography>

      <img className="cartPhoto" height={330} src={Pingui} loading="lazy" alt="Pingui" />


      <Link to="/tienda">
        <Button color="secondary" variant="contained" m={5} size="small">
          Ir a comprar
          <DirectionsRunIcon sx={{ padding: 1 }} />
        </Button>
      </Link>
    </div>
  );

  return (
    <Container>
      <Typography
        variant="h4"
        color="text.primary"
        marginTop={12}
        marginBottom = {5}
        className="CartHeader"
      >
        ¡Arma tus valijas! La Patagonia te espera...
      </Typography>

      {total === 0 ? (
        message
      ) : (
        <>
          {cart.map((item) => (
            <div className="CartItems">
              <Card key={item.item.id} className="CartContent">
                <CardContent   >
                  <Typography variant="h5">{item.item.title} </Typography>
                  <Typography variant="h6"> AR${item.item.price}</Typography>
                  <Typography>Cantidad: {item.quantity}</Typography>
                  <Typography>
                    Precio total: ${item.item.price * item.quantity}
                  </Typography>
                </CardContent>
                
                <Button variant="outlined" startIcon={<DeleteIcon />}
                onClick={() => { removeItem(item); } }
              >               
                Eliminar
              </Button>
              </Card>
              
            </div>
          ))}

          <Card className="CartItems">
            <CardContent>
              <Typography variant="h6">Total: AR$ {addTotal()}</Typography>
            </CardContent>
          </Card>

<div className="CartButtons">
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
                <Button
                  color="secondary"
                  variant="contained"
                  m={5}
                  size="small"
                >
                  Seguir comprando
                </Button>
              </Link>
            </>
          )}

          <Link to="/checkOut">
            <Button color="primary" variant="contained" m={5} size="small">
              Finalizar compra
            </Button>
          </Link>
          
          </div>
        </>
      )}
    </Container>
  );
};

export default Cart;
