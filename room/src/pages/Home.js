import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/banner';
import {Link} from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';



export default function Home() {
    return ( 
    <>
        <Hero>
            <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at a reasonable price">
                <Link to="/rooms" className="btn-custome">Available Rooms</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
       
    </>
    )
}