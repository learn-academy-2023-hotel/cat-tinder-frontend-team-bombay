import React from 'react'
import { NavLink } from 'react-router-dom'
// import CatNew from '../pages/CatNew'

const Header = () => {

    return (
        <div className="header">
            <h1>😻 Meet the Paws of your life 😻 </h1>
            <NavLink to={"/catnew"} className="nav-link">Create Your Pawfile!</NavLink>
        </div>    
    )
}

export default Header