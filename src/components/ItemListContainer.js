import React from 'react'
import ItemCount from './itemCount'

const ItemListContainer = (props) => {
    return (
        <div>
            <h3> {props.greeting}</h3>
            
            
        <div>
            <ItemCount stock="3"  />
            
        </div>

        </div>
        

    )
}

export default ItemListContainer
