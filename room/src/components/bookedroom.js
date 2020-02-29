import React, {Component} from 'react';
import Navbar from "./Navbar";

export default class BookedRooms extends Component
{ 
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
        }
    }

    getRooms = async () => {
        const { id } = JSON.parse(localStorage.getItem('user'));
        console.log(id);
        const res = await fetch(`http://localhost:5000/rooms/bookedrooms?id=${id}`, {
            method: 'GET'
        });
        const rooms = await res.json();
        this.setState({ rooms })
    }

    componentDidMount() {
        this.getRooms();
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