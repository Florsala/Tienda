import React , {useState} from 'react'




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
             <button onClick = {onAdd}>

                +

                </button>            


                <h1>cantidad: {counter}</h1>

                <button onClick = {substract } >
                    -

                </button>
                <div><button onClick = {() =>{  
                    if (counter === 1) {
                         console.log( `${counter} item agregado al carrito`) 
                    } else {
                        console.log(`${counter} items agregados al carrito`);
                    }
                    
                   } }> Agregar </button>
                </div>
                
        
            
        </div>
    )
}

export default ItemCount
