import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/user';
import { updateTeamPoints } from '../redux/teams';


const ClimbsForm = ({ set }) => {


    const [completedClimbs, setCompletedClimbs] = useState([]);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    function handleClimbToggle(climbId) {
        if (completedClimbs.includes(climbId)) {
            setCompletedClimbs(completedClimbs.filter(climb => climb.id !== climbId));
        } else {
            setCompletedClimbs([...completedClimbs, climbId])
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/users/${user.id}/update_climbs`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                user: {
                    climbs: completedClimbs
                }
            })
        })
        .then((r) => {
            if(r.ok) {
                r.json().then(user => {
                    dispatch(updateTeamPoints({ teamId: user.team_id, points: user.team.team_points, userPoints: user.points, userId: user.id}))
                    dispatch(updateUser(user))
                });
            }
        })
        navigate(`/${user.username}`)
    }

    //user ponits arent updating on the team side of things


    return (
        <div>
            <form onSubmit={handleSubmit}>
                    {set.climbs.map((climb) => (
                        <div key={climb.id}>
                            <h1>{climb.color} V{climb.grade}</h1>
                            <label>Completed: </label>
                            <input 
                                type="checkbox" 
                                checked={completedClimbs.includes(climb.id)}
                                onChange={() => handleClimbToggle(climb.id)}
                            />
                        </div>
                    ))}
                    <input type='submit'/>
                </form>
        </div>
    )
}

export default ClimbsForm;