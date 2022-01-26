import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


import db from '../firebase/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const { CategoryId } = useParams();

  useEffect(async() => {
    setLoading(true);

    const getItems = CategoryId ?
    query(collection(db, 'products'), where('category', '==',CategoryId ))
    :
    collection(db, 'products');

    try {
      const querySnapshot = await getDocs(getItems)

     

      setItems(querySnapshot.docs.map(e => {
        return {...e.data(), id: e.id}
      }))
    }
    catch {
      console.log("error");
    }

    setLoading(false)
  }, [CategoryId]);




    
    
 /*    new Promise((resolve) => {
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
  }, [CategoryId]); */

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
