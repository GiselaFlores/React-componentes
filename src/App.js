import './App.css';
import React, { useState } from 'react';


function Contador() {
  const [cont, setCont]= useState(0);

  const sumaClick = () => {
    setCont(cont + 1);
  };

  return(
    <div className='text-center mt-4'>
        <h1>CONTADOR</h1>
        <p>{cont}</p>
        <button onClick={sumaClick} className='btn btn-primary'>Agregar</button>
    </div>
  );
}

/*  <button onClick={() => setCont(cont + 1)}>Agregar</button>*/ 

function App() {
  return (
    <div className="App">
      <Contador/>
    </div>
  );
}

export default App;
