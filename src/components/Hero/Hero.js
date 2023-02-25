import {Link} from 'react-router-dom';
import './Hero.scss';

const Hero = () => {
    return(
        <div className="Hero">
            <p className="Hero_title">
                <span className="Hero_title_name">GOClimate</span> 
                supports climate projects certified by the UN and Gold Standard, and assist you with tips on how to lower your carbon footprint.
            </p>
            <Link className='Hero_link' to="https://www.goclimate.com/about" target={'_blank'}>Find out more</Link>
            <Link className='Hero_link Hero_btn' to="/calculator">Calculate your flight carbon footprint here</Link>
        </div>
    )
};

export default Hero