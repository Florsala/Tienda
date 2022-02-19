import React from "react";
import Button from "@mui/material/Button";

import { Box, Typography } from "@mui/material";

const ItemCount = ({ Add, stock, counter, setCounter }) => {
 

  const onAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const substract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="buttonsBox">
      <Box sx={{ display: "inline-flex" }} m={3}>
        <Button variant="contained" size="x-small" className="button" onClick={substract}>
         
          -
        </Button>

        <Typography m={1}>cantidad de pasajeros: {counter}</Typography>
        <Button variant="contained" size="small" className="button" onClick={onAdd}>
          +
        </Button>
      </Box> 

     

      <Button
      className="btnAgregar"
        
        variant="contained"
        size="medium"
        color="secondary"
      
        
        pb={3}
        onClick={() => {
          Add();
           if (counter === 1) {
            console.log(`${counter} item agregado al carrito`);
          } else {
            console.log(`${counter} items agregados al carrito`);
          } 
        }}
      >
        Comprar
      </Button>
    </div>
  );
};

export default ItemCount;
