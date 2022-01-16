import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

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
      }, 1500);
    });

    getItems
      .then((res) => {
        setItems(res);
      })
      .finally(() => setLoading(false));
  }, [CategoryId]);

  return loading ? (
    <>
    <h2>cargando...</h2>
      <Backdrop
        sx={{ color: "#e8b610", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  ) : (
    <div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
