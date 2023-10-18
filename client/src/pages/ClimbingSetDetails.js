import React from 'react'
import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

const ClimbingSetDetails = () => {

    const {setName} = useParams()

    const climbingSets = useSelector(state => state.climbingSets)

    const set = climbingSets?.find(set => set.set_name === setName)
    if(!set) return <h1>Loading...</h1>

    console.log(set)


  return (
    <div>
        <h1>Week {set.week} - {set.set_name}</h1>
        <p>Image here for set picture via active storage</p>
        <h2>{set.date_start} - {set.date_end}</h2>
        {set.climbs.map((climb) => (
            <h1>{climb.color} V{climb.grade}</h1>
        ))}
    </div>
  )
}

export default ClimbingSetDetails;

// i want to display the date as Oct. 16, 2023

// update the mapped climbs to be a input forms field to enter completion status for user to submuit their completed climbs