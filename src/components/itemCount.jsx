import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(1);

  const onAdd = () => {
    if (counter < stock) {
      {
        setCounter(counter + 1);
      }
    }
  };

  const substract = () => {
    if (counter > 1) {
      {
        setCounter(counter - 1);
      }
    }
  };

  return (
    <div>
      <Box sx={{ display: "inline-flex" }} m={3}>
        <Button variant="outlined" size="x-small" className="button" onClick={substract}>
         
          -
        </Button>

        <Typography m={1}>cantidad de pasajeros: {counter}</Typography>
        <Button variant="outlined" size="small" className="button" onClick={onAdd}>
          +
        </Button>
      </Box>

      <Button
        sx={{ display: "inline" }}
        variant="outlined"
        size="small"
        pb={3}
        onClick={() => {
          if (counter === 1) {
            console.log(`${counter} item agregado al carrito`);
          } else {
            console.log(`${counter} items agregados al carrito`);
          }
        }}
      >
        Agregar
      </Button>
    </div>
  );
};

export default ItemCount;
