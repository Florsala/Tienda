import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from "../img/esmeralda.jpg";
import img2 from "../img/trekk2.jpg";
import img3 from "../img/Carbajal.jpg";
import { Typography } from '@mui/material';


const Home = () => {
    return (
        <>
        
        <Typography variant="h3" color="text.secondary" m={10}> Tu tienda de viajes en Ushuaia</Typography>

        <ImageList sx={{ width: 700, height: 500 }} variant="woven" cols={3} gap={8} m={12}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    

    </>
  );
}

const itemData = [
  {
    img: img1,
    title: 'Bed',
  },
  {
    img: img2,
    title: 'Kitchen',
  },
  {
    img: img3,
    title: 'Sink',
  },
/*   {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  }, */
  
  
];

export default Home

