import React , {useState} from 'react'
import Button from '@mui/material/Button';




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
             <Button variant="contained" onClick = {onAdd}>

                +

                </Button>            


                <h1>cantidad: {counter}</h1>

                <Button variant="contained" onClick = {substract } >
                    -

                </Button>
                <div><Button variant="contained" onClick = {() =>{  
                    if (counter === 1) {
                         console.log( `${counter} item agregado al carrito`) 
                    } else {
                        console.log(`${counter} items agregados al carrito`);
                    }
                    
                   } }> Agregar </Button>
                </div>
                
        
            
        </div>
    )
}

export default ItemCount
