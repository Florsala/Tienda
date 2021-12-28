import React , {useState} from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/system';




const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1);

 const onAdd = () => {
    if (counter < stock) {
        
        {setCounter(counter+1)}

    }
    
    
 }

const substract = () => {

    if (counter > 1) {
        {setCounter(counter-1)}
    }

}


    return (
        <div>
            <Box sx={{ display: 'inline-flex', margin:2 }}>
                  <Button variant="outlined" size= "x-small" onClick = {substract }> - </Button>     


                <p >cantidad de pasajeros: {counter}</p>
                    <Button variant="outlined" size= "small" onClick = {onAdd}>+ </Button>  
               
            </Box>

                <div>
                    <Button variant="outlined" size= "small" pb={3} onClick = {() =>{  
                    if (counter === 1) {
                         console.log( `${counter} item agregado al carrito`) 
                    } else {
                        console.log(`${counter} items agregados al carrito`);
                    }
                    
                   } }> Agregar 
                   </Button>
                </div>
                
        
            
        </div>
    )
}

export default ItemCount
