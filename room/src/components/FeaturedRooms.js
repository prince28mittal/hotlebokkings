import React, {Component} from 'react';
import {RoomContext} from '../context';
import Loading from './Loading';
import Room from "./Room";
import Title from './Title';
import Navbar from "./Navbar";

export default class FeaturedRooms extends Component
{ 
    static contextType =  RoomContext;
    render()
    {
        let { loading, featuredRooms: room } = this.context;
        room = room.map(room => {
            return <Room key={room.id} room={room} />
        })

        return ( 
        <div>
        <Navbar />
            <section className="featured-names">
                <Title title="Featured Rooms" />
                <div className="featured-rooms-center">
                    {loading?<Loading />:room}
                </div>
            </section>
        </div>
        );
    }
}