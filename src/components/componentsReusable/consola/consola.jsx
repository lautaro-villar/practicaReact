// ConsolaComponent.jsx
import React, { useRef } from 'react';
import './consola.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'; // Estilo de GitHub para el resaltado

const Consola = ({ contenido, estiloConsola }) => {
  const textoRef = useRef();

  const copiarAlPortapapeles = () => {
    navigator.clipboard.writeText(textoRef.current.innerText);
  };

  // Resaltar el código cuando el componente se monta
  React.useEffect(() => {
    hljs.highlightAll();
  }, []);


  return (
    <div className= {`consola-contenedor ${estiloConsola}`}>
      <div className="consola-header">
        <button onClick={copiarAlPortapapeles}>Copy Code</button>
      </div>
      <pre className="consola">
        <code ref={textoRef} className="language-jsx">
          {contenido}
        </code>
      </pre> 
    
    </div>
    
  );
};

export default Consola;
