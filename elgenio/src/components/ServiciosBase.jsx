import { useState } from 'react'
import ima from '../assets/images/reiki.jpg'

function ServiciosBase({ data }) {
    const { imagen, textbtn, infop } = data;
    const [mostrar, setMostrar] = useState(false);

    const mostrartexto = () => {
        setMostrar(!mostrar)
    };

    return (
        <div className='servicio reiki2'>
            <img src={imagen} alt="reiki" />
            <div className='bt'>
                <button onClick={mostrartexto}>{textbtn}</button>
                {
                    (mostrar) ? (<p>{infop}</p>) : ''
                }
            </div>


        </div>
    )
}

export default ServiciosBase