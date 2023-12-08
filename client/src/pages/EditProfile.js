import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { updateUser } from '../redux/user'
import { setProfileUpdateError } from '../redux/error'
import { updateTeamPoints } from '../redux/teams'

const EditProfile = () => {

    const user = useSelector(state => state.user)
    const errors = useSelector((state) => state.error.profileUpdateError);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [handicap, setHandicap] = useState(user.handicap)

    function handleEditProfile(e) {
        e.preventDefault();
        fetch(`/users/${user.id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                username: username,
                email: email,
                handicap: handicap
            })
        })
        .then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    dispatch(updateUser(user))
                    if (user.team !== null) {
                        dispatch(updateTeamPoints({ teamId: user.team_id, points: user.team.team_points, userPoints: user.points, userId: user.id}))
                    }
                    dispatch(setProfileUpdateError(null));
                    navigate(`/${user.username}`)
                    })
            }
            else {
                r.json().then((errors) => dispatch(setProfileUpdateError(errors.errors)))
            }
        })
    }

    return (
        <div className='edit-profile'>
            <h1>Edit Profile</h1>
            <form onSubmit={handleEditProfile}>
                <label>First Name: </label>
                <input type = "text" name = "firstname" value = {firstName} onChange = {(e) => setFirstName(e.target.value)} /> <br></br>

                <label>Last Name: </label>
                <input type = "text" name = "lastname" value = {lastName} onChange = {(e) => setLastName(e.target.value)} /> <br></br>  
                      
                <label>Username: </label>
                <input type = "text"  name = "username" value = {username} onChange = {(e) => setUsername(e.target.value)} /> <br></br>

                <label>Email: </label>
                <input type = "text" name = "email" value = {email} onChange = {(e) => setEmail(e.target.value)} /> <br></br>

                <label>Handicap: </label>
                <select value = {handicap} onChange = {(e) => setHandicap(e.target.value)}>
                    {Array.from({ length: 11 }, (i, index) => (
                        <option key={index} value={index}>
                            V{index}
                        </option>
                    ))}
                </select> <br></br>
                <input type="submit" value="Save" />
            </form>
            {errors?.map((err) => (
                <li key={err}>
                    {err}
                </li>
            ))}
        </div>
  )
}

export default EditProfile;