import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      
      <NavBar/>

      <h1>Hola Mundo</h1>

<TailwindCss/>

    </div>
  );
}

function TailwindCss() {
  return (
    <h2 className="text-3xl font-bold underline">
      Hello world!
    </h2>
  )
}






export default App;
