import React, { useState} from 'react'
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

const ClimbingSetDetails = () => {

    const [completedClimbs, setCompletedClimbs] = useState([]);
    const {setName} = useParams();

    const user = useSelector(state => state.user);
    const climbingSets = useSelector(state => state.climbingSets);
    const set = climbingSets?.find(set => set.set_name === setName);

    function handleClimbToggle(climbId) {
        if (completedClimbs.includes(climbId)) {
            setCompletedClimbs(completedClimbs.filter(climb => climb.id !== climbId));
        } else {
            setCompletedClimbs([...completedClimbs, climbId])
        }
    }

    console.log(user)

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     fetch('/user_climbs', {
    //         method: 'POST',
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify({
    //             climb_id: completedClimbs
    //         })
    //     })
    //     .then((r) => {
    //         if(r.ok) {
    //             r.json().then(data => console.log(data));
    //         }
    //     })
    // }

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
                r.json().then(data => console.log(data));
            }
        })
    }

    console.log(completedClimbs)

    // need to updaTE USER STATE after form submit


    if(!set) return <h1>Loading...</h1>

    return (
        <div>
            <h1>Week {set.week} - {set.set_name}</h1>
            <p>Image here for set picture via active storage</p>
            <h2>{set.date_start} - {set.date_end}</h2>
            <h3></h3>
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

export default ClimbingSetDetails;

//upon submition of form, redirect to profile page and show updated completed climbs?? 

// i want to display the date as Oct. 16, 2023
