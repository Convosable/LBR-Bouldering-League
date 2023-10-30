import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const ClimbingSets = () => {

    const climbingSets = useSelector(state => state.climbingSets.data)

    return (
        <div>
            <h1> Climbing Sets</h1>
            {climbingSets?.map((set) => (
                <div key={set.id}>
                    <h1>Week: {set.week} - {set.set_name}</h1>
                    <p>Include an image of the set via Active Storage here</p> 
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