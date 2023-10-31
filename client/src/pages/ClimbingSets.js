import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const ClimbingSets = () => {

    const climbingSets = useSelector(state => state.climbingSets)

    return (
        <div className='climbing-sets-container'>
            <h1> Climbing Sets</h1>
            {climbingSets?.map((set) => (
                <div className='climbing-sets' key={set.id}>
                    <h1>Week: {set.week} - {set.set_name}</h1>
                    <img src='https://images.squarespace-cdn.com/content/v1/5ec6f17371904f56da2f0c57/1654992599448-A449ZBCS76RM6G2U0036/long+beach+rising.png?format=500w' alt= 'sample-photo' />
                    <Link to={`/climbing_sets/${set.set_name}`}>
                        <p>Set Details / Log climbs</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ClimbingSets;

//oirder by week (descendingf) 

//display all climbing sets week adn inam,ge with link to log climbs for specific week

//look into getting rid of %20 space in url (ex) http://localhost:4000/climbing_sets/Beer%20Wall)

//switch out photo with a photo submitted via active storage via admin user