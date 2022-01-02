import React from "react";
import ItemCount from "./itemCount";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
  return (
    <Box sx={{ display: "inline-flex" }} m={3} elevation={10}>
      <Card sx={{ maxWidth: 500, paddingBottom: 2, boxShadow: 3 }}>
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
        <ItemCount stock={pax} />
        <CardActions>
          <Typography variant="body3" m={3} color="text.primary">
            {` Tarifa por pasajero $${price}`}
          </Typography>

          <Button variant="contained" m={3} size="small">
            Comprar
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default ItemDetail;
