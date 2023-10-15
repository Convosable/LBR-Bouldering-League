import React from 'react'

import { useSelector } from 'react-redux'

const Teams = () => {

    const teams = useSelector(state => state.teams)

    console.log(teams)


  return (
    <div>
        <h1>Teams</h1>
        {teams.map(t => (
            <div>
                <h1>{t.team_name}</h1>
            </div>
        ))}
    </div>
  )
}

export default Teams