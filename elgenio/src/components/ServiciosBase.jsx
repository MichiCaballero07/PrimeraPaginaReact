import React from 'react'
import ima from '../assets/images/reiki.jpg'

function ServiciosBase({ data }) {
    const { imagen, textbtn, infop } = data;

    return (
        <div className='servicio reiki2'>
            <img src={imagen} alt="reiki" />
            <button>{textbtn}</button>
            <p>{infop}</p>
        </div>
    )
}

export default ServiciosBase