import React from 'react'
import { useParams } from 'react-router-dom';
import ClimbsForm from '../components/ClimbsForm';

import { useSelector } from 'react-redux';

const ClimbingSetDetails = () => {

    const {setName} = useParams();

    const climbingSets = useSelector(state => state.climbingSets);

    const set = climbingSets?.find(set => set.set_name === setName);

    if (!set) return <h2>Loading...</h2>

    return (
        <div className='climbing-set-details'>
            <h1>Week {set.week} - {set.set_name}</h1>
            <h2>{set.formatted_start_date} - {set.formatted_end_date}</h2>
            <img src= {set.image_url} alt= {set.set_name} />
            <ClimbsForm set = {set}/>
        </div>
    )
}

export default ClimbingSetDetails;
