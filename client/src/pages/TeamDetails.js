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
                <div key={member.id}>
                    <ul>{member.first_name} {member.last_name}</ul>
                    <ul>{member.points} points</ul>
                    <ul>Handicap: {member.handicap}</ul>
                </div>

            ))}
        </div>
    )
}

export default TeamDetails;

//need to adjust what is sent through wioth member... shouldnt be sending all of the member data, just what is necessary,... name points handicap

//team image via Active storage?
