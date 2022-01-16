import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import img1 from "../img/esmeralda.jpg";
import img2 from "../img/trekk2.jpg";
import img3 from "../img/Carbajal.jpg";
import img4 from "../img/fotoBeagle.jpg";

const Home = () => {
    return (
        <>
        <img className='fotoInicio'
            src= {img4}
                     
            loading="lazy"
          />


        <ImageList sx={{ width: 800, height: 600 }} variant="woven" cols={3} gap={8}>
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

