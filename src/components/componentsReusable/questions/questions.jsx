import React, { useState, useEffect } from 'react';
import './questions.css';

const Pregunta = ({ pregunta, opciones, reiniciar, onResponder }) => { /* Añade 'onResponder' como prop */
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [mostrarRespuesta, setMostrarRespuesta] = useState(false);

  // Efecto para manejar el reinicio de la pregunta
  useEffect(() => {
    if (reiniciar) {
      setRespuestaSeleccionada(null);
      setMostrarRespuesta(false);
    }
  }, [reiniciar]);

  // Modifica la función para notificar la respuesta correcta o incorrecta
  const seleccionarRespuesta = (opcion) => {
    setRespuestaSeleccionada(opcion);
    setMostrarRespuesta(true);
    onResponder(opcion.esCorrecta); // Notifica si la respuesta es correcta
  };

  return (
    <div className="pregunta">

      <h2>{pregunta}</h2>

      <ul> {opciones.map((opcion, index) => (  <li  key={index}  className={  mostrarRespuesta  ? opcion.esCorrecta  ? "correcta": "incorrecta"  : ""} onClick={() => seleccionarRespuesta(opcion)}>{opcion.texto}</li>   ))} </ul>
     
      {mostrarRespuesta && (  <div className="respuesta">La respuesta correcta es: {opciones.find(op => op.esCorrecta).texto}</div> )}

    </div>
  );
};

export default Pregunta;
