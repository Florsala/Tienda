import React, {useEffect, useState} from 'react'
import Item from './Item';

const ItemList = () => {

const [products, setProd] = useState([]);

useEffect (() =>{
    getItems()
},[])

const getItems = () =>{
    const getnewItems = new Promise ( (res, rej) =>{

       
    const products = [
    {Id:"001",
     title: "tour1",
     price: "100",
     img: "url"
    },
    {Id:"002",
    title: "tour2",
    price: "1000",
    img: "url"
   }]

   setTimeout( () => {
    res(products)  
}, 2000)
    

    })
    getnewItems.then( res => setProd(res))
}




 

    return (
        <div>
            <h1>Catálogo</h1>
        {products.map ( p => 

             <Item product = {p}></Item>
        )}
           
            
        </div>
    )
}

export default ItemList
