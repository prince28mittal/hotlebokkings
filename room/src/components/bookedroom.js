import React, {Component} from 'react';
import Navbar from "./Navbar";

export default class BookedRooms extends Component
{ 
    state = {
        rooms: []
    }
    async componentDidMount() {
        const { id } = JSON.parse(localStorage.getItem('user'))
        const res = await fetch(`http:/localhost:5000/rooms/bookedrooms/${id}`, {
            method: 'GET'
        });
        const rooms = await res.json();
        console.log(rooms)
        this.setState({ rooms })
    }
    render()
    {
        return ( 
        <div>
        <Navbar />
            <div>
                {
                    this.state.rooms.map(e => 
                        <div>
                            <span>{e.room.fields.name}</span>
                            <span><button>remove</button></span>
                        </div>
                        )
                }
            </div>
        </div>
        );
    }
}