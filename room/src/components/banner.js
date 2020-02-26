import React from 'react';
import Navbar from './Navbar';
function Banner({children, title, subtitle})
{
    return(<div>
        <Navbar />
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
        </div>
    )
}

export default Banner;