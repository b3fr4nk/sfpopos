import React from 'react'
import './Title.css'
import { NavLink } from 'react-router-dom'
import RandomSpace from './RandomSpace'

function Title(){
    return (
        <heading className='Title'>
            <h1>SFPOPOS</h1>
            <div className="Title-Subtitle">San Franciscos Privately Owned Public Spaces</div>

            <div>
                <NavLink
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/">List</NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/about">About
                </NavLink>
                <RandomSpace />
            </div>
        </heading>
    )
}

export default Title