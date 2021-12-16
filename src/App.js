import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      
    <h1>Mi Tienda</h1>
    <NavBar/>
    <ItemListContainer greeting='a la tienda!'/>


    </div>
  );
}






export default App;
