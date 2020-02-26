import React, {Component} from 'react';
import Title from './Title';
import {FaPizzaSlice, FaCocktail, FaCarSide, FaWifi, /*FaSmileBeam*/} from 'react-icons/fa'

export default class Services extends Component
{
     state={
         service:[
             {
                 icon:<FaPizzaSlice/>,
                 title:'Food',
                 info:'this is some random information about food available please later before evaluation'
             },
             {
                icon:<FaCocktail/>,
                title:'Drinks',
                info:'this is some random information about drinks available please later before evaluation'
            },
            {
                icon:<FaCarSide/>,
                title:'Pick/Drop',
                info:'this is some random information about car available please later before evaluation'
            },
            {
                icon:<FaWifi/>,
                title:'Wifi',
                info:'this is some random information about wifi available please later before evaluation'
            }/*,
            {
                icon:<FaSmileBeam/>,
                title:'Hosts',
                info:'this is some random information about host available please later before evaluation'
            }*/
            
         ]
     }
    render()
    {
        return ( 
        <section className="services">
            <Title title="Services"/>
          <div className="services-center">
             {this.state.service.map((item,index) => {
                 return (
                 <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                 </article>
                 );
             })}
          </div>  
        </section>
        )
    }
}