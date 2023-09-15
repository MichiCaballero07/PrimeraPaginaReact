import image from '../assets/images/feelings.jpg'
import imag from '../assets/images/constfamily.jpg'

import imt from '../assets/images/tpareja.jpg'

import React from 'react'
import ServiciosBase from './ServiciosBase'


const Servicios = ({data}) => {

    const data1 = data[0];
    const data2 = data[1];
    const data3 = data[2];
    const data4 = data[3];
    return (
        <div>

            <div>Servicios</div>

            <ServiciosBase data={data1}/>
            <ServiciosBase data={data2}/>
            <ServiciosBase data={data3}/>
            <ServiciosBase data={data4}/>
        </div>

    )
}

export default Servicios