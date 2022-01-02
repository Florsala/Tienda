import React from 'react';
import Item from "./Item";

 const ItemList = ({items}) => {

  return (
    <div>
      {items.map( (i) => 
      (<Item {...i} key= {i.id}/> ))

      }
      
    </div>
  )
}

export default ItemList

