import React from 'react'

import img4 from "../img/andes.jpg";
import { Typography } from '@mui/material';


const Home = () => {
    return (
        <>
        <img className="fotoInicio" src={img4} loading="lazy" alt="Beagle" />
        
        <Typography color="white" variant='h4' className='header'>
           Tu tienda de viajes en el Fin del mundo</Typography>

         

    </>
  );
}

export default Home

