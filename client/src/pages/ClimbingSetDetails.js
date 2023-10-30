import React from 'react'
import { useParams } from 'react-router-dom';
import ClimbsForm from '../components/ClimbsForm';

import { useSelector } from 'react-redux';

const ClimbingSetDetails = () => {

    const {setName} = useParams();

    const climbingSets = useSelector(state => state.climbingSets.data);

    const set = climbingSets?.find(set => set.set_name === setName);


    if(!set) return <h1>Loading...</h1>

    return (
        <div>
            <h1>Week {set.week} - {set.set_name}</h1>
            <p>Image here for set picture via active storage</p>
            <h2>{set.date_start} - {set.date_end}</h2>
            <ClimbsForm set = {set}/>
        </div>
    )
}

export default ClimbingSetDetails;

//upon submition of form, redirect to profile page and show updated completed climbs?? 

// i want to display the date as Oct. 16, 2023
