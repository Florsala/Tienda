import React, {useEffect, useState} from 'react'
import Item from './Item';
import products from '../data/products.js'

const ItemList = () => {

const [items, setItems] = useState([]);

useEffect (() =>{
    getItems()
},[])

const getItems = () =>{
    const getnewItems = new Promise ( (res, rej) =>{

       
   setTimeout( () => {
    res(products)  
}, 2000)
   

    })
    getnewItems.then( res => setItems(res))
}



    return (
        <div>
            
        {items.map ((item) => {

             <Item 
             key= {item.id}
             product = {item}>

             </Item>
        }
        )};
           
            
        </div>
    )
}

export default ItemList
