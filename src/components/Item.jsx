import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { Link } from "react-router-dom";




const Item = ({ items }) => {
  return (

    <>

   {
     items.map(items =>

    
   
   
   <Box key={items.id} 
   sx={{
      display: 'flex',
      flexWrap: 'wrap',
      
     
    }} m={4} elevation={20} mt={10}>
    
      <Card  sx={{ width: 380, paddingBottom: 2, boxShadow: 3 }}>
        <CardMedia className="cards"
          component="img"
          height="200"
          image={items.img}
          price={items.price}
          alt="Tour"
        />
        <CardContent sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
      }}>
          <Typography gutterBottom variant="h5"  component="div">
            {items.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {items.description}
          </Typography>
        </CardContent>


        <CardActions sx={{
        display: "flex",
        justifyContent: "center",
      }}>
          <Box sx={{
        textAlign: "center"
      }} > 
          <Link to= {`/tour/${items.id}`}>
          

          
          <Button sx={{
        backgroundColor:"#0893dd",
        fontWeight:700,
        color:"#f3e8e8",
        margin:2,
      }} size="large"  variant="contained" >ver actividad</Button>
          </Link>
          <Typography color="text.primary" > Tarifa por pasajero
            
          </Typography>
          <Typography color="text.primary" variant="h6" sx={{
        fontWeight: 700,
        padding:2,
      }}> 
            AR$ {items.price}
          </Typography>
          
          </Box>
        </CardActions>

      </Card>
    </Box>

     )
    }

    </>
  );
};

export default Item;

