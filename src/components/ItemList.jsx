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
     price: "$ 10.500",
     img: "url"
    },
    {Id:"002",
    title: "tour2",
    price: "$ 10.000",
    img: "url"
   },
   {Id:"003",
   title: "tour3",
   price: "$ 10.500",
   img: "url"
  },
  {Id:"004",
  title: "tour4",
  price: "$ 10.000",
  img: "url"
 },
 {Id:"005",
 title: "tour5",
 price: "$ 10.500",
 img: "url"
},
{Id:"006",
title: "tour6",
price: "$ 10.000",
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
