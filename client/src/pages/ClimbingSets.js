import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const ClimbingSets = () => {

    const climbingSets = useSelector(state => state.climbingSets)

    return (
        <div className='climbing-sets-main'>
            <h1> Climbing Sets</h1>
            <div className='climbing-sets-container'>
                {climbingSets?.map((set) => (
                    <div className='climbing-sets' key={set.id}>
                        {set.set_name === 'Grasshopper Board' ? <h1>{set.set_name}</h1> : <h1>Week {set.week} - {set.set_name}</h1>}
                        <img src= {set.image_url} alt={set.set_name} />
                            <Link to={`/climbing_sets/${set.slug}`}>
                                <p>Set Details / Log climbs</p>
                            </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ClimbingSets;