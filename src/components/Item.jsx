import React from 'react'
import ItemCount from './itemCount'


const Item = ({product }) => {
    return (
        <div>
            <div>{product.img}</div>
            <h3>{product.title}</h3>
            <p>{product.price}</p>

            <ItemCount stock="3"  />   
        </div>
    )
}


export default Item
