import logo from './logo.svg';
import './App.css';


function Persona(props) {
  return(
    <div className="persona"
         style={{backgroundColor: props.color}}
    >
      <h3>Nombre: {props.nombre}</h3>
      <p>Edad: {props.edad} </p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Hola mundo</h1> 
      <Persona nombre="Gisela" edad="25" color="red"/>
      <Persona nombre="Pedro" edad="15" color="green"/>
      <Persona nombre="María" edad="29" color="blue"/>
      <Persona nombre="María" edad="29"/>
    </div>
  );
}

export default App;
