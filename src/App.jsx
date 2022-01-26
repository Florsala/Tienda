import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Cart from "./components/Cart";
import Home from "./components/Home";
import {CartProvider} from "./context/cartContext";
import Antartida from "./components/Antartida";

import products from "./data/products";
import db from "./firebase/firebase";
import {collection, addDoc} from 'firebase/firestore';
import {fileUpload} from './firebase/fileUpload';

function App() {

const uploadData = ()=> {

products.forEach(async (element) =>{
  const imgURL = await fileUpload(element.img)

addDoc(collection(db, 'products'), {...element, img: imgURL} )

})

}

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <button className="btnSubir" onClick={uploadData}>Subir</button>

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/Excursiones" element={<ItemListContainer />} />

            <Route path="/Antartida" element={<Antartida />} />


            <Route path="/category/:CategoryId" element={<ItemListContainer />}
            />

            <Route path="/tour/:id" element={<ItemDetailContainer />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
