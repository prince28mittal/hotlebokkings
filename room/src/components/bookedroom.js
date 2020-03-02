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
        const res = await fetch(`http://localhost:5000/rooms/bookedrooms?id=${id}`, {
            method: 'GET'
        });
        const rooms = await res.json();
        console.log(rooms)
        this.setState({ rooms })
    }

    removeBookedRoom = (id, roomid) => {
        return async () => {
            const res = await fetch(`http://localhost:5000/rooms/removebookedrooms?id=${id}`,{
                method: 'POST',
                body: JSON.stringify({ id, roomid }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            const rooms = this.state.rooms.filter( e => e._id !== id );
            await this.setState({ rooms });
            alert(data.msg);
        }
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
                    <div key={e._id}>
                        <span>{e.room.fields.name}</span>
                        <span><button onClick={this.removeBookedRoom(e._id, e.room._id)}>remove</button></span>
                    </div>
                    )
            }
        </div>
        </div>
        );
    }
}