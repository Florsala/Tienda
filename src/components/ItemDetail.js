import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles";
import ItemCount from "./itemCount";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";
import { Box } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';


const useStyles = makeStyles({
  boxContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 30,
    
    
  },
  boxPrice:{
    background: "linear-gradient(to right, #006cd4 , #80adc7)",
    border: "1px solid #00b8d4",
    padding: 20,
    color: "#f9f4f4",
    borderRadius: 5,
    margin: 25,
    display:"flex",
    alignItems: "center",
    flexDirection:"column",
    width: "40%",
    
    
  },
  priceTitle:{
display: "flex",
  },
  priceIcon:{
    padding: 5,
  }
});

const ItemDetail = ({ item }) => {
  const classes = useStyles();

  const [addToCart, setAddToCart] = useState(false);

  const { addItem, addTotal } = useContext(cartContext);

  const [counter, setCounter] = useState(1);

  const Add = () => {
    setAddToCart(true);

   
    addItem({ item: item, quantity: counter });

    addTotal();
  };

  useEffect(() => {
    console.log(addToCart, "agregado");
  }, [addToCart]);

  return (
    <Card  sx={{ paddingBottom: 4 }}>
      <CardMedia
        component="img"
        height="450"
        image={item.img}
        price={item.price}
        alt={`${item.id}`}
      />
      <CardContent className={classes.boxContainer}>
         <Typography gutterBottom variant="h4" component="div">
          {item.title}
        </Typography>

        <Box sx={{ textAlign: "left", backgroundColor: "#ffee58",
    width: "30%",
    margin: 4,
    padding: 4,
    borderRadius: 2,
    borderBottom: "7px solid #79a9c7",}}>

       
        <Typography variant="body1" color="text.secondary" marginTop={2}>
          {item.description}
        </Typography>
        <Typography variant="body1" color="text.secondary" marginTop={2} marginBottom={2}>
          {item.descripcion2}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        *{item.include}
        </Typography>
        <Typography variant="body1" color="text.secondary" marginTop={2}>
          {item.duration}
        </Typography>
</Box>

        <Box className={classes.boxPrice} >
          <Typography variant="h6" m={3} className={classes.priceTitle} >
            <span>
            <LocalOfferIcon className={classes.priceIcon}/>
            </span>
            Tarifa por pasajero 
          </Typography>
          <Typography variant="h5">
            AR$ {item.price}
          </Typography>
          


        

      {
        !addToCart && (
          <div className={classes.boxContainer}>
            <ItemCount
              stock={item.pax}
              Add={Add}
              counter={counter}
              setCounter={setCounter}
            />
          </div>
        )

        //funcion agregar carrito
      }

      {addToCart && (
        <div className={classes.boxContainer}>
          <Link to="/cart">
            <Button color="secondary" variant="contained" m={5} size="small">
              Finalizar Compra
            </Button>
          </Link>

          <Link to="/Excursiones">
            <Button variant="outlined" color="secondary">Seguir comprando</Button>
          </Link>
        </div>
      )}
</Box>
      </CardContent>
      <CardActions className={classes.boxContainer}>
        <Link to="/Excursiones">
          <Button color="secondary" variant="contained" m={5} size="small">
            Volver al inicio
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default ItemDetail;
