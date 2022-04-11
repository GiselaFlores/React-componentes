import React, { useState } from 'react';


function Contador() {
  const [cont, setCont]= useState(0);

  return(
    <div className='text-center mt-4'>
        <h1>CONTADOR</h1>
        <p>{Contador}</p>
        <button onClick={sumaClick} className='btn btn-primary'>Agregar</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Contador/>
    </div>
  );
}

export default App;
