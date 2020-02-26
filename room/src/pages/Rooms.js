import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';


const Room = () => {
    return (
        <> 
        <Hero hero="roomsHero">
           <Banner title="Rooms available for you">
               <Link to="/" className="btn-primary">
                    Home
               </Link>
           </Banner>
        </Hero>
        <RoomsContainer />
        </>
    )
}

export default Room;