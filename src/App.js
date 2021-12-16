
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      
    <h1>Mi Tienda</h1>
    <NavBar/>
    <ItemListContainer greeting='Bienvenido a la tienda!'/>


    </div>
  );
}






export default App;
