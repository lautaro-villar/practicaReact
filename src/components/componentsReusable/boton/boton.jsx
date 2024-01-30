import React from 'react';
import './boton.css';

function Boton({ cambiarFondo, fondoNegro }) {
  return (
    <button onClick={cambiarFondo} style={{ color: fondoNegro ? 'white' : 'black' }}>
      ☼
    </button>
  );
}

export default Boton;
