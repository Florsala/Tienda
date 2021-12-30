import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({}) => {
    
 /*  const [products, setProd] = useState([]);

  const [loading, setLoading] = useState(true); */

  const { CategoryId } = useParams();

  setLoading(true);

  const getItems = new Promise((resolve) => {
    setTimeout(() => {
      const data = id;
    });
  });

  return (
    <div>
      <ItemList />

      <div></div>
    </div>
  );
};

export default ItemListContainer;
