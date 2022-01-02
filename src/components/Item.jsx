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

    <Link to= {`/tour/${id}`}>
    <Box sx={{ display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap' , justifyContent:'space-evenly' }} m={3} elevation={20}>
      <Card sx={{ maxWidth: 345, paddingBottom: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="140"
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
          <Button size="small" >Más info</Button>
          <Typography variant="body3" color="text.primary">
            {price}
          </Typography>
        </CardActions>

      </Card>
    </Box>

    </Link>
  );
};

export default Item;
