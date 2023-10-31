import React from 'react'
import { useParams } from 'react-router-dom';
import ClimbsForm from '../components/ClimbsForm';

import { useSelector } from 'react-redux';

const ClimbingSetDetails = () => {

    const {setName} = useParams();

    const climbingSets = useSelector(state => state.climbingSets);

    const set = climbingSets?.find(set => set.set_name === setName);

    const startDate = new Date(set.date_start);
    const endDate = new Date(set.date_end);

    const formattedStartDate = startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    const formattedEndDate = endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    return (
        <div className='climbing-set-details'>
            <h1>Week {set.week} - {set.set_name}</h1>
            <h2>{formattedStartDate ? formattedStartDate : null} - {formattedEndDate ? formattedEndDate : null}</h2>
            <img src='https://images.squarespace-cdn.com/content/v1/5ec6f17371904f56da2f0c57/1654992599448-A449ZBCS76RM6G2U0036/long+beach+rising.png?format=500w' alt= 'sample-photo' />
            <ClimbsForm set = {set}/>
        </div>
    )
}

export default ClimbingSetDetails;

//upon submition of form, redirect to profile page and show updated completed climbs?? 

// i want to display the date as Oct. 16, 2023

//replace image with active storage img 
