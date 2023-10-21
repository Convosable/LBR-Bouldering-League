import React from 'react'
import { useParams } from 'react-router-dom'

import { useSelector } from 'react-redux'

const TeamDetails = () => {

    const { teamName } = useParams();

    const teams = useSelector(state => state.teams);
    const user = useSelector(state => state.user);
    

    const team = teams?.find((team) => team.team_name === teamName)
    if(!team) return <h1>Loading...</h1>

    function handleJoinTeam(e) {
        e.preventDefault()
        fetch(`/users/${user.id}/join_team`, {
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                team_id: team.id
            })
        })
            .then((r) => {
                if(r.ok) {
                    r.json().then(data => console.log(data));
                }
            })
    }

    //joins team succesdfully... need to update state now for team and error handling (ex user is already on team etc)
   
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
            <button onClick={handleJoinTeam}>Join Team</button>
        </div>
    )
}

export default TeamDetails;

//team image via Active storage?
