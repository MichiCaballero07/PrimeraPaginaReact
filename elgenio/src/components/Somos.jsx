import { useState } from 'react'

import images from '../assets/images/emotions.jpg'


const Somos = () => {

    const [mostrar, setMostrar] = useState(false);

    const mostrartexto = () => {
            setMostrar(!mostrar)
    };
    return (
        <div>


            <div className='emotions'>
                <img src={images} alt="emotions" />
               <button onClick={mostrartexto}>Blog</button>
                {
                    (mostrar) ? (<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo totam atque officia sapiente quidem. Obcaecati, culpa mollitia! Veritatis incidunt aliquam possimus cumque, tenetur obcaecati, qui a, libero quas eos distinctio.</p>) : ''
                }
            </div>

        </div>

    )
}

export default Somos
