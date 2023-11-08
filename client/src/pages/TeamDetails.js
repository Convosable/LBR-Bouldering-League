import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { addTeamMember } from '../redux/teams'
import { deleteTeam } from '../redux/teams'
import { removeTeamMember } from '../redux/teams'
import { updateUser } from '../redux/user'

const TeamDetails = () => {

    const { teamName } = useParams();
    const [errors, setErrors] = useState(null);

    const navigate = useNavigate();

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
                r.json().then(user => {
                    dispatch(addTeamMember(user))
                    dispatch(updateUser(user))
                });
            } else {
                r.json().then((err => setErrors(err.errors)));
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
                r.json().then(user => {
                    dispatch(deleteTeam(team.id))
                    dispatch(removeTeamMember({teamId: team.id, userId: user.id}))
                    dispatch(updateUser(user))
                });
            }
        })
        .then(() => {
            navigate(`/teams/new`);
          });
    }
   
    if(!team) return <h1>Loading...</h1>

    return (
        <div className='team-details'>
            <h1>{team.team_name}</h1>
            <h2>{team.team_points} points</h2>
            {team.users.map((user) => (
                <div className='team-member' key={user.id}>
                    <h4>{user.first_name} {user.last_name}</h4>
                    <h4>{user.points} points</h4>
                    <h4>Handicap: V{user.handicap}</h4>
                </div>
            ))}
            {user.team_id === null && team.users.length < 4 ? <button onClick={handleJoinTeam}>Join Team</button>: null}     
            {team.id === user.team_id ? <button onClick={handleLeaveTeam}>Leave Team</button> : null }
            {errors ? <h3>{errors}</h3> : null}
        </div>
    )
}

export default TeamDetails;

//team image via Active storage?

