import React from 'react'

import { useSelector } from 'react-redux';

const Profile = () => {

    const user = useSelector((state) => state.user);

    console.log(user)
  return (
    <div>
        <h1>{user.full_name}</h1>
        <p>insert user image via active stoarage</p>
        <h2>{user.points} points</h2>
        { user.team ? <h2>{user.team.team_name}</h2> : <h2>No Team</h2> }
    </div>
  )
}

export default Profile;