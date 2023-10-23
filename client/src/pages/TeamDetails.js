import React from 'react'
import { useParams } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { addTeamMember } from '../redux/teams'
import { removeTeamMember } from '../redux/teams'

const TeamDetails = () => {

    const { teamName } = useParams();

    const dispatch = useDispatch();
    const teams = useSelector(state => state.teams);
    const user = useSelector(state => state.user);
    

    const team = teams?.find((team) => team.team_name === teamName)

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
                r.json().then(updatedTeam => dispatch(addTeamMember(updatedTeam)));
            }
        })
    }

    function handleLeaveTeam(e) {
        e.preventDefault();
        fetch(`/users/${user.id}/leave_team`, {
            method: 'PATCH',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({
                team_id: null
            })
        })
        .then((r) => {
            if(r.ok) {
                r.json().then(response => {
                    dispatch(removeTeamMember({ teamId: team.id, userId: user.id }));
                    console.log(response); // change to save in state to display message for 3 seconds
                });
            }
        })
    }
   
    if(!team) return <h1>Loading...</h1>

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
            { user.team_id === null ? <button onClick={handleJoinTeam}>Join Team</button> : null }
            { team.id === user.team_id ? <button onClick={handleLeaveTeam}>Leave Team</button> : null }
        </div>
    )
}

export default TeamDetails;

//team image via Active storage?

