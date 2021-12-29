import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {


    const [items, setItems] = useState([]);

    const {id} = useParams();



    useEffect(() => {

        getItem()

        },([id])
        );


const getItem = new Promise ( (resolve, reject) => {


    const products = [
        {id:"001",
         title: "City tour",
         price: "$ 10.500",
         img: "/img/andes.jpg",
         desc: "lorem ipsum"
        },
        {id:"002",
        title: "National Park ",
        price: "$ 10.000",
        img: "/img/pasarela.jpg",
        desc: "lorem ipsum"
       },
       {id:"003",
       title: "Penguins colony tour",
       price: "$ 10.500",
       img: "/img/Penguin.jpg",
       desc: "lorem ipsum"
      },
      {id:"004",
      title: "Trekking",
      price: "$ 10.000",
      img: "/img/PNtdf.jpg",
      desc: "lorem ipsum"
     },
     {id:"005",
     title: "tour5",
     price: "$ 10.500",
     img: "/img/andes.jpg",
     desc: "lorem ipsum"
    },
    {id:"006",
    title: "tour6",
    price: "$ 10.000",
    img: "/img/andes.jpg",
    desc: "lorem ipsum"
    }]
    

const filter = products.find(product => product.id == id)
setItems(filter)

       setTimeout( () => {
        resolve(products)  
    }, 2000)


})

getItem.then( resolve => items (resolve) ) 








    return (
        <div>

            <ItemDetail
            key={items.id}>

            </ItemDetail>
            
        </div>
    )
}

export default ItemDetailContainer
