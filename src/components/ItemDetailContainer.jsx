import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import db from '../firebase/firebase';
import { getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const [item, setItem] = useState({});

  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const ref = doc (db, 'products', id)

      setLoading(true);

      getDoc(ref)
      .then( querySnapshot => {
        setItem({...querySnapshot.data(), id: querySnapshot.id})
      })
      .catch(e => console.log(e))
 
      .finally(() => setLoading(false));
  },[id]);
  
   


  return loading ?
  <>
    
      <Backdrop
        sx={{ color: "#e8b610", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  :
  
    <div>
      <ItemDetail 
      item={item}/>
    </div>
 
};

export default ItemDetailContainer;
