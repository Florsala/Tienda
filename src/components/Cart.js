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
import HikingIcon from '@mui/icons-material/Hiking';
import DeleteIcon from '@mui/icons-material/Delete';



const Cart = () => {
  let empty = "false";

  const { cart, clearCart, removeItem, addTotal, total } = useContext(cartContext);


const message = (
  <div className="cartContainer">
  <Typography variant="h6" color="text.secondary" marginTop={12} marginBottom={6}>
  ¡Ups! Tu carrito está vacío...

</Typography>

<Link to = "/Excursiones">
<Button color="secondary" variant="contained" m={5} size="small">
Ir a comprar     
<HikingIcon sx={{ padding: 1 }}/>

       </Button>
  
</Link>


</div>

)



  return (
    <Container>
      <Typography variant="h6" color="text.secondary" margin={12} className="CartHeader">
        ¡Arma tus valijas! La Patagonia te espera...
      </Typography>

{total === 0 ? (message) : 

(
<>

      {cart.map((i) => (
        <div className="CartItems">
          <Card  key={i.id} >
            <CardContent >
              <Typography variant="h5">{i.title} </Typography>
              <Typography variant="h6"> AR${i.price}</Typography>
              <Typography>Cantidad: {i.quantity}</Typography>
              <Typography>Precio total: ${i.price*i.quantity}</Typography>
            </CardContent>
          </Card>
          <Button
            onClick={() => {
              removeItem(i);
            }}
          >
            <DeleteIcon/>
            Eliminar
          </Button>
        </div>
      ))}

      <Card className="CartItems">
        <CardContent>
        <Typography variant="h6">Total: AR$ {addTotal()}</Typography>
        </CardContent>
      </Card>

      <Button className="CartButtons"
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
          
          </>
)}
    </Container>
  );
};

export default Cart;
