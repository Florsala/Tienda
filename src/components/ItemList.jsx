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
    {id:"001",
     title: "tour1",
     price: "$ 10.500",
     img: "/img/andes.jpg",
     stock: "10"
    },
    {id:"002",
    title: "tour2",
    price: "$ 10.000",
    img: "/img/pasarela.jpg",
    stock: "10"
   },
   {id:"003",
   title: "tour3",
   price: "$ 10.500",
   img: "/img/Penguin.jpg",
   stock: "10"
  },
  {id:"004",
  title: "tour4",
  price: "$ 10.000",
  img: "/img/PNtdf.jpg",
  stock: "10"
 },
 {id:"005",
 title: "tour5",
 price: "$ 10.500",
 img: "/img/andes.jpg",
 stock: "10"
},
{id:"006",
title: "tour6",
price: "$ 10.000",
img: "/img/andes.jpg",
stock: "10"
}]

   setTimeout( () => {
    res(products)  
}, 2000)
   

    })
    getnewItems.then( res => setProd(res))
}



    return (
        <div>
            
        {products.map ( p => 

             <Item 
             key= {p.title}
             product = {p}>

             </Item>
        )}
           
            
        </div>
    )
}

export default ItemList
