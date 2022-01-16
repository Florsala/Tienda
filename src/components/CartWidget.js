import React, { useContext } from "react";

import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";

const CartWidget = () => {

    const {cart, total} = useContext(cartContext);


  return (
    <div className="MallIcon">
      <Link to={"/Cart"}>
        <LocalMallIcon color="white" />
        <span className="cartNumber">
            ({total})
           
        </span>
      </Link>
    </div>
  );
};

export default CartWidget;
