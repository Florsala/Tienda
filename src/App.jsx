
import {
  BrowserRouter, Routes, Route} from "react-router-dom";

import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';
import ItemDetail from "./components/ItemDetail";

function App() {
  return (

   <BrowserRouter>

<Routes>

<Route index element={<Home/>}/>

<Route path="/ItemDetail/:Id" element= {<ItemDetail/>}>

</Route>

</Routes>

    <div className="App">
      
    
  <NavBar/>

  <ItemListContainer/> 

    


    </div>
    
    </BrowserRouter> 
  );
}






export default App;
