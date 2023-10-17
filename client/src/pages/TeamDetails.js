import React from 'react'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'

const TeamDetails = () => {

    const { teamName } = useParams();

    const teams = useSelector(state => state.teams)


    const team = teams?.find((team) => team.team_name === teamName)
    if(!team) return <h1>Loading...</h1>

    console.log(team)
   

    return (
        <div>
            <h1>{team.team_name}</h1>
            <h2>{team.team_points} points</h2>
            <h2>Members</h2>
            {team.members.map((member) => (
                <ul>{member}</ul>
            ))}
        </div>
    )
}

export default TeamDetails;

//i want to change members to an arrayy of objects so that i can displaty individual points as well

//team image via Active storage?
