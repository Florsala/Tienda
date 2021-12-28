
import {
  BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';

function App() {
  return (

   <BrowserRouter>

<Routes>

  <Route index element={<Home/>}/>
  <Route path="/products" element= {<ItemListContainer/>}></Route>
</Routes>

    <div className="App">
      
    <h1>Mi Tienda</h1>
    <NavBar/>

    

    <ItemListContainer/> 

    


    </div>
    
    </BrowserRouter> 
  );
}






export default App;
