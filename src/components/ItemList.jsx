import React from 'react';
import Item from "./Item";

 const ItemList = ({items}) => {

  return (
    <div className='FlexCards'>
      {items.map( (i) => 
      (<div >
      <Item {...i} key= {i.id}/> </div>))

      }
      
    </div>
  )
}

export default ItemList

