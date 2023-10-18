import React, { useState} from 'react'
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

const ClimbingSetDetails = () => {

    const [completedClimbs, setCompletedClimbs] = useState([]);
    const {setName} = useParams()


    const climbingSets = useSelector(state => state.climbingSets)
    const set = climbingSets?.find(set => set.set_name === setName)

    function handleClimbToggle(climbId) {
        if (completedClimbs.includes(climbId)) {
            setCompletedClimbs(completedClimbs.filter(id => id !== climbId))
        } else {
            setCompletedClimbs([...completedClimbs, climbId])
        }
    }

    console.log(completedClimbs)

    // on submit, i need to handle a adding the completion status of climb to the user


    if(!set) return <h1>Loading...</h1>

    return (
        <div>
            <h1>Week {set.week} - {set.set_name}</h1>
            <p>Image here for set picture via active storage</p>
            <h2>{set.date_start} - {set.date_end}</h2>
            <h3></h3>
            <form>
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

// i want to display the date as Oct. 16, 2023

// update the mapped climbs to be a input forms field to enter completion status for user to submuit their completed climbs