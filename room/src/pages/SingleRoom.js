import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props)
    {
        super(props)
       // console.log(this.props);
       this.state = {
           slug: this.props.match.params.slug,
       };
    }
    static contextType = RoomContext;
    /*componentDidMount()
    {
    }*/

    bookroom = async (_id) => {
        const {id} = JSON.parse(localStorage.getItem('user'));
        console.log(id)
        const res = await fetch('http://localhost:5000/rooms/bookrooms',{
            method: 'POST',
            body: JSON.stringify({ user: id, room: _id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const success = await res.json();
        console.log(success)
    }

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        if(!room)
        {
            return (
                <div className="error">
                    <h3>no such are roooms are available</h3>
                    <Link to="/rooms" className="btn-primary">Rooms Present</Link>
                </div>
            )
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images, _id} = room
              
        return ( 
            <>
        <StyledHero img={`http://localhost:5000/static/${images[0] || 'room-1.jpeg'}`}>
            <Banner title={`${name} room`}>
                <Link to='/rooms' className='btn-primary'>
                    Back to Rooms again
                </Link>
            </Banner>
        </StyledHero>
        <center style={{paddingTop:"25px"}}>
            <button className="btn btn-primary" onClick={() => this.bookroom(_id)}>
                Book Now
            </button>
        </center>
        <section className="single-room">
            <div className="single-room-images">
                {images.map((item,index)=>{
                    return <img key={index} src={`http://localhost:5000/static/${item}`} alt={name} />
                })}
            </div>
            <div className="single-room-info">
                <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                </article>
                <article className="info">
                    <h3>info</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : ${size} SQFT</h6>
                    <h6>
                        max capacity : {
                            capacity > 1 ? `${capacity} people` : `${capacity} person `
                        }
                    </h6>
                    <h6>{pets?"pets allowed":"no pets allowed"}</h6>
                    <h6>{breakfast && "breakfast included"}</h6>
                </article>
            </div>
        </section>
        <section className="room-extras">
            <h6>extras</h6>
                    <ul className="extras">{extras.map((item,index) => {
                    return <li key={index}>- {item}</li>
                    })}</ul>
        </section>
        </>
        )
    }
}