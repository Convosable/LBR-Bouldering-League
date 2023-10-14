import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  return (
    <div>
        <NavLink to="/" exact="true">Home</NavLink>
        <NavLink to="/teams" exact="true">Teams</NavLink>
        <NavLink to="/standings" exact="true">Standings</NavLink>
        <NavLink to="/climbing-sets" exact="true">Climbing Sets</NavLink>
        <NavLink to="/team-signup" exact="true">Team Signup</NavLink>
        <NavLink to="/profile" exact="true">Profile</NavLink>
    </div>
  )
}

export default NavBar;