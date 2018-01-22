import React, { Component } from 'react';
import './Home.css'
import {Link} from 'react-router-dom';


export default class Home extends Component {



    // function carousel(){

    // }


    render() {
        return (
            <div className='home'>
               <div className='box'>
               <div className='home-btn'><Link to='/recipes'>Explore</Link></div>
               </div>
            </div>
        )
    }

}