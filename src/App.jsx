import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Cart from "./components/Cart";
import Form from "./components/Form"
import {CartProvider} from "./context/cartContext";
import Footer from "./components/pages/Footer"

//import products from "./data/products";
//import db from "./firebase/firebase";
//import {collection, addDoc} from 'firebase/firestore';
//import {fileUpload} from './firebase/fileUpload';

function App() {
/* 
const uploadData = ()=> {

products.forEach(async (element) =>{
  const imgURL = await fileUpload(element.img)

addDoc(collection(db, 'products'), {...element, img: imgURL} )

})

} */

  return (
    <ThemeProvider theme={theme} /* className="App" */>
      <BrowserRouter>
        <CartProvider>
          <NavBar />

       {/*  <button className="btnSubir" onClick={uploadData}>Subir items</button> */}

          <Routes>
            

{/*             <Route path="/" element={<ItemListContainer />} />
 */}
            <Route exact path="/tienda" element={<ItemListContainer />} />


            <Route path="/category/:CategoryId" element={<ItemListContainer />}
            />

            <Route path="/tour/:id" element={<ItemDetailContainer />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/checkOut" element={<Form/>} />

          </Routes>

          <Footer/>
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
