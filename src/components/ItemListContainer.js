import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import db from "../firebase/firebase";
import {collection, getDocs, query, where} from 'firebase/firestore';
import Home from "./Home";




export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(true);

  const { CategoryId } = useParams();

  useEffect(async() => {
    setLoading(true);


  


  
const dataId= CategoryId ? 
query(collection(db, 'products'), where('category', '==', CategoryId))

: collection(db, 'products');

try {
const querySnapshot = await getDocs(dataId)


      setItems(querySnapshot.docs.map(e => {
        return {...e.data(), id: e.id}
      }))
    }
    catch {
      console.log("error");
    }

    setLoading(false)
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
      <Home/>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;

