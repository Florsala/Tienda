import React , {useState} from 'react'

/* function itemCount({stock, initial, onAdd}) {
    
    const sumar = () => {
        if (initial <= stock) {


            
        }

        (onAdd+1)
    }
    
    const restar = () => {
        (onAdd-1)
    }
    
    
    return (
       
    )
}

export default itemCount
 */



const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1);


    return (
        <div>
             <button onClick = {() => {
                
                if (counter <= stock) {
                    
                }
                
                {setCounter(counter+1)} } }>

                +

                </button>            


                <h1>cantidad: {counter}</h1>

                <button onClick = {() => 
                
                    
                    
                    
                    {setCounter(counter-1)} } >
                -

                </button>

                <button onClick = {() =>  console.log("Agregado al carrito") } > Agregar </button>
        
            
        </div>
    )
}

export default ItemCount
