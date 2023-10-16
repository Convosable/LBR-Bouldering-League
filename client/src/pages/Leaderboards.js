import React from 'react'

import { useSelector } from 'react-redux'

const Leaderboards = () => {

  const teams = useSelector(state => state.teams)

  function ordinalSuffix(number) {
    if (number === 1 || (number > 20 && number % 10 === 1)) {
      return `${number}st`;
    } else if (number === 2 || (number > 20 && number % 10 === 2)) {
      return `${number}nd`;
    } else if (number === 3 || (number > 20 && number % 10 === 3)) {
      return `${number}rd`;
    } else {
      return `${number}th`;
    }
  }
  
  return (
    <div>
        <h1>Leaderboard</h1>
        {teams.map((team, index) => (
          <div key={team.id}>
            <h1>{`${ordinalSuffix(index + 1)} Place: ${team.team_name}`}</h1>
            <h2>{`${team.team_points} points`}</h2>
          </div>
        ))}
    </div>
  )
}

export default Leaderboards;

//add a search for teams section