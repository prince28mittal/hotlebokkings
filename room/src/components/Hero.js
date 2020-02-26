import React from 'react';
import Navbar from './Navbar';

 function Hero({children, hero}) {
    return  (
        <div>
        <Navbar />
            <header className={hero}>
                {children}
            </header>
        </div>
    );
}


Hero.defaultProps = {
    hero: "defaultHero"
};


export default Hero;