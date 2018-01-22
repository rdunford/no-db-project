import React, { Component } from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <div className="navbar">

                <div className="nav-left">
                    <div className="left-logo"><Link to='/'>Mad Maceys Kitchen</Link></div>
                </div>

                <div className="nav-middle">
                    <div className="recipes"><span><Link to='/recipes'>RECIPES</Link></span></div>
                    <div className="favorites"><span><Link to='/favorites'>FAVORITES</Link></span></div>
                    <div className="about"><span><Link to='/addrecipe'>ADD-A-RECIPE</Link></span></div>
                    <div className="blog"><span>BLOG</span></div>
                </div>

                <div className="nav-right">
                    <icon className="facebook"></icon>
                    <icon className="instagram"></icon>
                    <icon className="twitter"></icon>
                </div>

            </div>
        )
    }
}