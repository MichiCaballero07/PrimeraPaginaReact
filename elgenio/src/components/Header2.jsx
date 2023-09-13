
const Header2 = () => {
    return (
        <div>

            <header>
                <p className='logoMaritza'>MARITZA GRANADO</p>
                <ul className='contul'>
                    <li>Nosotros</li>
                    <li>Blog</li>
                    <li className='servicios'>Servicios
                        <ul className='ulSecond'>
                            <li className='reiki'>Reiki</li>
                            <li className='terapia'>Terapia
                                <ul className='ulthird'>
                                    <li>Constelaciones Familiares</li>
                                    <li>Terapia de Parejas</li>
                                    <li>Terapia Personal</li>
                                </ul>
                            </li>
                            <li>Testimonios</li>
                        </ul>
                    </li>
                    <li>Compania</li>
                    <li>Contactanos</li>
                </ul>
            </header>
        </div>
    )
}

export default Header2
