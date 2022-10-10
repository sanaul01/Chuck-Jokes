import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Navber.css';

const Navbar = () => {
    return (

        <div>
            <div className="navbar">
                <div className="topnav">
                    <a href="">
                        <NavLink className="navlink">so functioniert's</NavLink>
                    </a>
                    <a href="">
                        <NavLink className="navlink">sonderangebote</NavLink>
                    </a>
                    <a href="">
                        <NavLink className="navlink">mein bereich</NavLink>
                    </a>
                </div>

            </div>
            <Banner />
        </div>


    );
};

export default Navbar;