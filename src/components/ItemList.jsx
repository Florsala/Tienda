import React, { useEffect, useState } from "react";
import Item from "./Item";
import products from "../data/products.js";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
  const getItems = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });

  getItems.then((res) => setItems(res));

}, [] );

  return (
    <div>
      {items?.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
};

export default ItemList;
