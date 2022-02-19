import React, { useContext, useState } from "react";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";

const CartWidget = () => {

    const {total} = useContext(cartContext);

const cartNumber = (

  <span className="cartNumber">
            {total}
           
        </span> 


)


  return (
    <div className="MallIcon">
      <Link to={"/Cart"}>
        <LocalMallIcon color="white" />



{ total !== 0 && (cartNumber)}


        
      </Link>
    </div>
  );
};

export default CartWidget;
