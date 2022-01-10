import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import Cart from "./components/Cart";



function App() {
  return (
<ThemeProvider theme={theme}>

    <BrowserRouter>
      <NavBar />

      <Routes>
        

        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:CategoryId" element={<ItemListContainer />} />

        <Route path="/tour/:id" element={<ItemDetailContainer />}/>

        <Route path= "/cart" element={<Cart/>}/>

       
      </Routes>

    </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
