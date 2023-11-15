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
                    <img src= {set.image_url} alt={set.set_name} />
                    <Link to={`/climbing_sets/${set.set_name}`}>
                        <p>Set Details / Log climbs</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ClimbingSets;