import React from 'react'
import { NavLink } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/user';



const NavBar = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

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
        <NavLink to="/leaderboards" exact="true">Leaderboards</NavLink>
        <NavLink to="/climbing_sets" exact="true">Climbing Sets</NavLink>
        <NavLink to="/teams/new" exact="true">Team Signup</NavLink>
        <NavLink to={`/${user.username}`}exact="true">Profile</NavLink>
        <button onClick = {() => handleLogout()}>Logout</button>
    </div>
  )
}

export default NavBar;