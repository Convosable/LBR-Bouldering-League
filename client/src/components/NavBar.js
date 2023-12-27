import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../images/LBR-logo-bubble.png'

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/user';



const NavBar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    function handleLogout() {
        fetch('/logout', {
            method: 'DELETE'
        })
        .then((r) => {
            if(r.ok) {
                dispatch(setUser(null));
                navigate('/');
            }
        })
    }

    return (
        <div className='navbar'>
            <img src={logo} alt='lbr-logo-bubble' />
            <NavLink to="/" exact="true">Home</NavLink>
            <NavLink to="/leaderboards" exact="true">Leaderboards</NavLink>
            <NavLink to="/climbing_sets" exact="true">Climbing Sets</NavLink>
            <NavLink to="/teams/new" exact="true">Team Signup</NavLink>
            {user.admin === true ? <NavLink to="/admin-tools" exact="true">Admin Tools</NavLink> : <NavLink to={`/${user.username}`}exact="true">Profile</NavLink>}
            <button onClick = {() => handleLogout()}>Logout</button>
        </div>
    )
}

export default NavBar;