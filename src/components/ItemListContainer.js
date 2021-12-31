import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {

  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true); 



  const { CategoryId } = useParams();

  useEffect(() => {
      setLoading(true);


 const getItems = new Promise((resolve) => {
    setTimeout(() => {
      const dataId = CategoryId ? ItemList.filter((item) => item.category=== CategoryId) : ItemList;

      resolve(dataId);
    }, 1000);
  });

  getItems
  .then ((res) => {
      setItems (res);
  })
  .finally (() =>  setLoading(false));

}, [CategoryId] );
  

  return loading ? (
      <h3>cargando...</h3>)
      : (
    <div>
      <ItemList items = {items}/>

      
    </div>
  );
};

export default ItemListContainer;
