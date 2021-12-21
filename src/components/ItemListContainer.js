import React from 'react'
import itemCount from './itemCount'

const ItemListContainer = (props) => {
    return (
        <div>
            <h3> {props.greeting}</h3>
            
            
        <div>
            <itemCount stock="20" initial="1" />
            
        </div>

        </div>
        

    )
}

export default ItemListContainer
