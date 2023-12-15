import React from 'react'
import { Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'


const Home = () => {
    return (
        <>
        <div className='background-color'>
         <div className="home-background"> 
        </div> 
        <div className='home-buttons'>
            <NavLink to={"/catnew"} className="nav-link-new"><Button color="success">Create Your Pawfile!</Button></NavLink>
            <NavLink to={"/catindex"} className="nav-link-all"><Button color="success">Sniff Out New Friends!</Button></NavLink>
        </div>
        </div>
        </>
    )
}

export default Home