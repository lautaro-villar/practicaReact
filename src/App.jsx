import React, { useState } from 'react';
import './App.css';
//import './components/componentsLayaout/general/components.css'

// Componentes
import Card from './components/componentsReusable/card/card';
import Pregunta from './components/componentsReusable/questions/questions';
import Boton from './components/componentsReusable/boton/boton';
import Consola from './components/componentsReusable/consola/consola';
// Componentes

// Datos
import Cards from './data/productos';
import Preguntas from './data/preguntas';
import Consolas from './data/consola';
// Datos

// ComponentesLayaout
/*import Header from './components/componentsLayaout/header/header';
import Main from './components/componentsLayaout/main/main';
import Footer from './components/componentsLayaout/footer/footer';*/
// ComponentesLayaout

function App() {

  //USE STATE
  const [reiniciar, setReiniciar] = useState(false);
  const [puntuacion, setPuntuacion] = useState(0);
  const [fondoNegro, setFondoNegro] = useState(true);
  // USE STATE

  const reiniciarJuego = () => {
    setReiniciar(true);
    setTimeout(() => setReiniciar(false), 100);
    setPuntuacion(0);
  };

  const manejarRespuesta = (esCorrecta) => {
    if (esCorrecta) {
      setPuntuacion(puntuacionAnterior => puntuacionAnterior + 2);
    }
  };


  // Listas
  const listaDeCartas = Cards.map((v, index) => (<Card key={index} nombre={v.nombre} descripcion={v.descripcion} imagen={v.imagen} estilo={v.estilo} />));
  const listaDePreguntas = Preguntas.map((v, index) => (<Pregunta key={index} pregunta={v.pregunta} opciones={v.opciones} id={v.id} reiniciar={reiniciar} onResponder={manejarRespuesta} />));
  const listaDeConsolas = Consolas.map((v, index) => (<Consola key={index} contenido={v.contenido} estiloConsola={v.estiloConsola} id={v.id} />))

  return (

    <div className="App" style={{ backgroundColor: fondoNegro ? 'black' : 'white' }}>

      <Boton cambiarFondo={() => setFondoNegro(!fondoNegro)} fondoNegro={fondoNegro} />

      <h1>Hola REACT!</h1>

      <div className="container">

        <div className="vehiculos"> {listaDeCartas} </div>

        <div className="preguntas"> {listaDePreguntas} </div>

        <div className="containerControl">

          <div>Puntuación: {puntuacion}</div> {/* Muestra la puntuación */}

          {/*BOTON*/}
          <button onClick={reiniciarJuego}>Reiniciar Juego</button>
          {/*BOTON*/}

        </div>

        <div className="containerConsolas"> {listaDeConsolas} </div>

      </div>

      {/*<Header/>
      <Main/>
      <Footer>/*/}

    </div>
  );
}

export default App;
