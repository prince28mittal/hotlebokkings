import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';



export default function Home() {
    const [authenticate, setAuthenticate] = useState(false);

    useEffect( () => {
        const auth = JSON.parse(localStorage.getItem('authenticated'));
        setAuthenticate(auth);
    }, []);

    return ( 
    <>
        <Hero>
            <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at a reasonable price">
                <Link to="/rooms" className="btn-custome">Available Rooms</Link>
                <Link to="/bookedrooms" className="btn-custome">Booked Rooms</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
       
    </>
    )
}