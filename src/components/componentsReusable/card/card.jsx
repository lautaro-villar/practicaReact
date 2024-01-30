import React from 'react'
import './card.css'


function Card(props) {

    return (
        <div className="contenedor">

            <div className={`card ${props.estilo}`}>

                <h2>  {props.nombre} </h2>
                <img src={props.imagen} alt={props.nombre + "imagen"} />
                <p>  {props.descripcion} </p>

            </div>

        </div>
         
    )
    
}

export default Card