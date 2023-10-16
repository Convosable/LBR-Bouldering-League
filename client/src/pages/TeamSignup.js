import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const TeamSignup = () => {

    const [search, setSearch] = useState('')
    const [teamName, setTeamName] = useState('')

    const teams = useSelector(state => state.teams)
    
    const filterBySearch = teams?.filter(team => {
        return team.team_name.toLowerCase().includes(search.toLowerCase())
    })

    function handleTeamCreate(e) {
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
                r.json().then(team => console.log(team));
                setTeamName('')
            } else {
                r.json().then(error => console.log(error.errors));
                setTeamName('')
            }
        })
    }

    //need to add current user to team 


    // need to create a redux reducer to update state of teams (addTeam)
    // need to create a redux reducer to handle the error message for new team (ex) team_name already exists... user can only create onwe team...)

  return (
    <div>
        <div>
            <h2>Create a team:</h2>
            <form onSubmit = {handleTeamCreate}>
                <label>Team Name:</label>
                <input 
                    type='text'
                    name='team_name'
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                /> <br></br>
                <input type='submit'/>
            </form>
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
            {filterBySearch.map(team => (
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