import React from 'react';
import Item from "./Item";

 const ItemList = ({items}) => {

  return (
    <div className='FlexCards'>
      
      <Item items={items} /> 
              
      
    </div>
  )
}

export default ItemList


