import images from '../assets/images/emotions.jpg'
import image from '../assets/images/feelings.jpg'

const Somos = () => {
    return (
        <div>


            <div className='emotions'>
                <img src={images} alt="emotions" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nulla, illum, aliquam odio numquam ab, commodi corporis quaerat nihil consequatur dolores maiores nobis in aliquid eligendi itaque quos id adipisci!</p>
            </div>
            <div className='feelings'>
                <img src={image} alt="feelings" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam temporibus exercitationem, in culpa eligendi quae assumenda ducimus eaque explicabo autem officiis deleniti voluptate velit? Esse quia odio aperiam iusto illum?</p>
            </div>

        </div>

    )
}

export default Somos
