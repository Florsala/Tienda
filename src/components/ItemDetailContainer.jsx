import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getItem();
  }, [id]);

  const getItem = new Promise((resolve, reject) => {
    
  //aca estaba el array

    setTimeout(() => {
          const filter = products.find((product) => product.id === id);
    /* setItems(filter); */

      resolve(filter);
    }, 2000);
  });

  getItem
  
  .then((resolve) => items(resolve));



  return (
    <div>
      <ItemDetail key={items.id}></ItemDetail>
    </div>
  );
};

export default ItemDetailContainer;
