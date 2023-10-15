import React from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch } from 'react-redux';
import { setUser } from '../redux/user';



const NavBar = () => {

    const dispatch = useDispatch();

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then((r) => {
            if(r.ok) {
                dispatch(setUser(null));
            }
        })
    }

  return (
    <div>
        <NavLink to="/" exact="true">Home</NavLink>
        <NavLink to="/teams" exact="true">Teams</NavLink>
        <NavLink to="/standings" exact="true">Standings</NavLink>
        <NavLink to="/climbing-sets" exact="true">Climbing Sets</NavLink>
        <NavLink to="/team-signup" exact="true">Team Signup</NavLink>
        <NavLink to="/profile" exact="true">Profile</NavLink>
        <button onClick = {() => handleLogout()}>Logout</button>
    </div>
  )
}

export default NavBar;