import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Box from "@mui/material/Box";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const { CategoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const dataId = CategoryId
          ? products.filter((item) => item.category === CategoryId)
          : products;

        resolve(dataId);
      }, 1000);
    });

    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [CategoryId]);

  return loading ? (
    <h3>cargando...</h3>
  ) : (
      <Box mt={10} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center' }}>
        <ItemList items={items} />
      </Box>
      
    
  );
};

export default ItemListContainer;
