import React from 'react'

import { useSelector } from 'react-redux'

const Teams = () => {

    const teams = useSelector(state => state.teams)

  return (
    <div>
        <h1>Teams</h1>
        {teams.map(t => (
            <div key={t.id}>
                <h1>{t.team_name} - {t.id}</h1>
                <h2>{t.team_points} points</h2>
                <h2> Members: {t.members.map(m => (
                    <div key={m.id}>
                        <h2>{m}</h2>
                    </div>
                ))}</h2>
            </div>
        ))}
    </div>
  )
}

export default Teams


// create a teams details page that shows the members of the team and maybe a pixcture if i end up using ACtive Strorgae


//team card compnent to render each team? Maybe not necessary with the lack of information the teams actually have