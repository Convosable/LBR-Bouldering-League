import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

const Profile = () => {

    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const climbingSets = useSelector(state => state.climbingSets)

    console.log(user)

    return (
        <div className='profile'>
            <div className='profile-header'>
                <img src={user.image_url} alt='image-placeholder' />
                <h1>{user.username}</h1>
                <button onClick={() => navigate(`/${user.username}/edit`)}>Edit Profile</button>
            </div>

            <h1>{user.full_name} - {user.points} points</h1>
            <h2>Handicap: V{user.handicap}</h2>
            { user.team 
            ? <h2><Link to={`/teams/${user.team.team_name}`}>{user.team.team_name} - {user.team.team_points} points</Link></h2> 
            : <h2>No Team</h2> }
            
            <h2>Completed Climbs:</h2>
            <div className='week-set-container'>
                {climbingSets.map((week) => {
                    const completedClimbs = user.climbs_by_grade.filter((climb) => climb.climbing_set_id === week.id);

                    return (
                        <div key={week.id} className="week-set">
                            <h2>Week {week.week}: {week.set_name}</h2>
                            {completedClimbs.map((climb) => (
                                <li key={climb.id}>
                                    {climb.color} V{climb.grade} - {climb.points} points
                                </li>
                            ))}
                        </div>
                    );
                })}
            </div>    
        </div>
    );
};



export default Profile;

//display climbing_set via climbingset.find(set => set.id === climb.climbing_set_id)

// replace ima ge holder with active storage photo upload]

//comleted climbs week 1 -5 columns of completitons for css