import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

function Home() {
    return (
        <div className='home'>
            <div className='header'>
                <div className='headerRight'>
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/graphic'>Grafika</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className='body'>
                <img src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'/>
            </div>
            <div className='footer'>
                <div className='footerLeft'>
                    <Link to='/advise'>Reklamuj się</Link>
                    <Link to='/company'>Dla firm</Link>
                    <Link to='/about'>O nas</Link>
                    <Link to='/howto'>Jak działa wyszukiwarka</Link>
                </div>
                <div className='footerRight'>
                    <Link to='/privacy'>Prywatność</Link>
                    <Link to='/conditions'>Warunki</Link>
                    <Link to='/settings'>Ustawienia</Link>
                </div>
            </div>
        </div>
        );
}

export default Home;
