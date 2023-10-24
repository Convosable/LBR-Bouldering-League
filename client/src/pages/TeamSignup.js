import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { setNewTeamError } from '../redux/error'
import { addTeam } from '../redux/teams'
import { addUserTeam } from '../redux/user'

const TeamSignup = () => {

    const [search, setSearch] = useState('')
    const [teamName, setTeamName] = useState('')
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const teams = useSelector(state => state.teams);
    const errors = useSelector(state => state.error.newTeamError);
    
    const filterBySearch = teams?.filter(team => {
        return team.team_name.toLowerCase().includes(search.toLowerCase())
    })

    function createTeam(e) {
        e.preventDefault()
        fetch('/teams', {
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({ 
                team_name: teamName
            })
        })
        .then((r) => {
            if(r.ok) {
                r.json().then(team => {
                    dispatch(addTeam(team))
                    dispatch(addUserTeam(team.id))
                    navigate(`/teams/${team.team_name}`)
                });

                setTeamName('')
            } else {
                r.json().then(error => dispatch(setNewTeamError(error.errors)));
                setTeamName('')
            }
        })
    }

    

    return (
        <div>
            <div>
                <h2>Create a team:</h2>
                <form onSubmit = {createTeam}>
                    <label>Team Name:</label>
                    <input 
                        type='text'
                        name='team_name'
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                    /> <br></br>
                    <input type='submit'/>
                </form>
                {errors}
            </div>
            <div>
                <h2>Find a team:</h2>
                <label>Search existing teams:</label>
                <input 
                    type="text" 
                    name="search" 
                    value={search} 
                    onChange = {(e) => setSearch(e.target.value)} 
                />
            </div>
                {filterBySearch?.map(team => (
                    <Link key={team.id} to={`/teams/${team.team_name}`}>
                        <h1>{team.team_name}</h1>
                    </Link>
                ))}
        </div>
    )
}

export default TeamSignup

// select a team to join with a password lock

// if team doesnt exist click here to create a new team

//can i set up a password to join a team??