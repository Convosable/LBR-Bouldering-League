import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../redux/user';
import { updateTeamPoints } from '../redux/teams';
import { setClimbsFormError } from '../redux/error';


const ClimbsForm = ({ set }) => {

    const user = useSelector(state => state.user);
    const error = useSelector(state => state.error.climbsFormError)
    const userClimbIds = user.climbs.map(climb => climb.id);

    const [completedClimbs, setCompletedClimbs] = useState(userClimbIds);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    function handleClimbToggle(climbId) {
        if (completedClimbs.includes(climbId)) {
            setCompletedClimbs(completedClimbs.filter(id => id !== climbId))
        } else {
            setCompletedClimbs([...completedClimbs, climbId])
        }
    }
    
    function handleSubmit(e) {
        e.preventDefault()
        const climbsData = completedClimbs.map((climbId) => ({
            id: climbId,
            completed: true
        }));
        fetch(`/users/${user.id}/update_climbs`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                user: {
                    climbs: climbsData
                }
            })
        })
        .then((r) => {
            if(r.ok) {
                r.json().then(user => {
                    dispatch(updateTeamPoints({ 
                        teamId: user.team_id, 
                        points: user.team.team_points, 
                        userPoints: user.points, 
                        userId: user.id}))
                    dispatch(updateUser(user))
                    navigate(`/${user.username}`)
                });
            } else {
                r.json().then(error => {
                    dispatch(setClimbsFormError(error.errors))
                    setTimeout(() => {
                        dispatch(setClimbsFormError(null));
                    }, 3000);
                });
            }
        })
    }

    return (
        <div>
            <form  className='climbs-form' onSubmit={handleSubmit}>
                <h2>Submit climbs here:</h2>
                {set.climbs.map((climb) => (
                    <div className='climbs' key={climb.id}>
                        {set.set_name === 'Grasshopper Board' ? 
                        <h2>{climb.name} - V{climb.grade}</h2> :
                        <h2>{climb.color} V{climb.grade}</h2>}
                        <input 
                            type="checkbox" 
                            checked={completedClimbs.includes(climb.id)}
                            onChange={() => handleClimbToggle(climb.id)}
                        />
                    </div>
                ))}
                {error ? <h2>{error}</h2> : null}
                <input type='submit'/>
            </form>
        </div>
    )
}

export default ClimbsForm;