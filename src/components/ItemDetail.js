import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles";
import ItemCount from "./itemCount";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";

const useStyles = makeStyles({
  boxContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: 100,
    marginBottom: 100,
  },
});

const ItemDetail = ({
  id,
  title,
  price,
  category,
  img,
  description,
  duration,
  include,
  pax,
}) => {
  const classes = useStyles();

  const [addToCart, setAddToCart] = useState(false);

  const {  addItem, addTotal, isInCart, cart , quantity} = useContext(cartContext);

  const [counter, setCounter] = useState(1);

  
  const Add = () => {

  
  setAddToCart(true);

    addItem(id,title, price, counter);
    addTotal ();
    
          
    
  };

  useEffect(() => {
    console.log(addToCart, "agregado");
  }, [addToCart]);




  return (
    <Box  className={classes.boxContainer}>
      <Card sx={{ width: 800, paddingBottom: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="450"
          image={img}
          price={price}
          alt={`${id}`}
        />
        <CardContent>
          
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {include}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {duration}
          </Typography>
        </CardContent>

        {
          !addToCart && <ItemCount stock={pax} Add={Add} counter={counter} setCounter={setCounter}/> 
          //funcion agregar carrito
        }

        {addToCart && (
          <>
            <Link to="/cart">
              <Button color="secondary" variant="contained" m={5} size="small">
                Finalizar Compra
              </Button>
            </Link>

            <Link to="/Excursiones">
              <Button>Volver</Button>
            </Link>
          </>
        )}

        <CardActions>
          <Typography m={3} color="text.primary">
            Tarifa por pasajero $ {price}
          </Typography>
        </CardActions>
        
        <Link to="/Excursiones">
            <Button color="secondary" variant="contained" m={5} size="small">
              Volver al inicio
            </Button>
          </Link>
      </Card>
    </Box>
  );
};

export default ItemDetail;
