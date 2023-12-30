import React from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
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

    function handleNavigate(url) {
        if (url === "/logout") {
            handleLogout();
        } else {
            navigate(url)
        }
    }

    return (
        <div>
            <div className='navbar'>
                <img src={logo} alt='lbr-logo-bubble' />
                <NavLink to="/" exact="true">Home</NavLink>
                <NavLink to="/leaderboards" exact="true">Leaderboards</NavLink>
                <NavLink to="/climbing_sets" exact="true">Climbing Sets</NavLink>
                <NavLink to="/teams/new" exact="true">Team Signup</NavLink>
                {user.admin === true ? 
                <NavLink to="/admin-tools" exact="true">Admin Tools</NavLink> : 
                <NavLink to={`/${user.username}`}exact="true">Profile</NavLink>}
                <button onClick = {() => handleLogout()}>Logout</button>
            </div>
            <div className='dropdown-menu'>
                <img src={logo} alt='lbr-logo-bubble' />
                <div className='dropdown'>
                    <select onChange={(e) => handleNavigate(e.target.value)}>
                        <option value = "/">Home</option>
                        <option value = "/leaderboards">Leaderboards</option>
                        <option value = "/climbing_sets">Climbing Sets</option>
                        <option value = "/teams/new">Team Signup</option>
                        <option value = {user.admin === true ? "/admin-tools" : `/${user.username}`}>
                            {user.admin === true ? "Admin Tools" : "Profile"}
                        </option>
                        <option value = "/logout">Logout</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default NavBar;