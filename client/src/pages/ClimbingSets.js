import React from 'react'

import { useSelector } from 'react-redux'

const ClimbingSets = () => {

    const climbingSets = useSelector(state => state.climbingSets)

    console.log(climbingSets)

  return (
    <div>
        <h1> Climbing Sets</h1>
    </div>
  )
}

export default ClimbingSets;