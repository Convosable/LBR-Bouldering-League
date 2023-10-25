import React from 'react'

import { useSelector } from 'react-redux';

const Profile = () => {

    const user = useSelector((state) => state.user);

    return (
        <div>
            <h1>{user.full_name}</h1>
            <p>insert user image via active stoarage</p>
            <h2>{user.points} points</h2>
            { user.team ? <h2>{user.team.team_name}</h2> : <h2>No Team</h2> }
            <h2>Completed Climbs</h2>
            {user.climbs.map((climb) => (
                <li key={climb.id}>{climb.color} V{climb.grade} - {climb.points} points</li>
            ))}
        </div>
    )
}

export default Profile;

//display climbing_set via climbingset.find(set => set.id === climb.climbing_set_id)