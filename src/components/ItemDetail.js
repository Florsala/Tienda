
import React from 'react'
import ItemCount from './itemCount'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const ItemDetail = (product) => {
    return (

<Box sx={{ display: 'inline-flex'}} m={3} elevation={20}>
        
        <Card sx={{ maxWidth: 345, paddingBottom:2, boxShadow: 3 }} >

          <CardMedia 
              component="img"
              height="140"
              image={product.img}
              price= {product.price}
              alt="Tour"
            />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {product.desc}
          </Typography>
        </CardContent>
          <CardActions >
            <Button size="small">Comprar</Button>
            <Button size="small">Más info</Button>
            <Typography  variant="body3" color="text.primary">{product.price}</Typography>
          </CardActions>

      
        <ItemCount stock="10"  />   


            
    </Card>

        </Box>    

        
    )
}

export default ItemDetail
