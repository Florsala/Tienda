import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import db from '../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const [items, setItems] = useState({});

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const ref = doc (db, 'products', id)

      setLoading(true);

      getDoc(ref)
      .then( querySnapshot => {
        setItems({...querySnapshot.data(), id: querySnapshot.id})
      })
      .catch(e => console.log(e))
 
      .finally(() => setLoading(false));
  },[id]);
  
   


/* 
  const getItem = new Promise((resolve) => {
    
    setTimeout(() => {
          const filter = products.find((product) => product.id === id);
    
      resolve(filter);
    }, 1200);
  });
  

  getItem
  
  .then((resolve) => {
    setItems(resolve);
})
.finally(() => setLoading(false));
  },[id]);
 */

  return loading ?
  <>
    <h2>cargando...</h2>
      <Backdrop
        sx={{ color: "#e8b610", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  :
  
    <div>
      <ItemDetail key={items.id} {...items}/>
    </div>
 
};

export default ItemDetailContainer;
