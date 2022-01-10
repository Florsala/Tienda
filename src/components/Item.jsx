import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Link } from "react-router-dom";




const Item = ({ id, title, price, img, description }) => {
  return (

    

    <Box  m={3} elevation={20} mt={10}>
      <Card sx={{ width: 350, paddingBottom: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image={img}
          price={price}
          alt="Tour"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Comprar</Button>

          <Link to= {`/tour/${id}`}>
          <Button size="small" >Más info</Button>
          </Link>
          <Typography color="text.primary" m={3}>
            AR$ {price}
          </Typography>
        </CardActions>

      </Card>
    </Box>

    
  );
};

export default Item;
