import React, { useState} from 'react'
import { Link } from 'react-router-dom';

import NewClimbForm from '../components/NewClimbForm';

import { useDispatch, useSelector } from 'react-redux'
import { removeClimbingSetClimb } from '../redux/climbingSets';
import { removeClimbingSet } from '../redux/climbingSets';

function Admin() {

    const [showFormForSet, setShowFormForSet] = useState({});

    const climbingSets = useSelector(state => state.climbingSets);

    const dispatch = useDispatch();

    function toggleFormVisibility(setId) {
      setShowFormForSet((prevState) => ({ ...prevState, [setId]: !prevState[setId]}));
    };

    function handleDeleteClimb(climb) {
      fetch(`/climbing_sets/${climb.climbing_set_id}/climbs/${climb.id}`, {
        method: 'DELETE'
      })
      .then(() => dispatch(removeClimbingSetClimb(climb)));
    }

    function handleDeleteSet(set) {
      fetch(`/climbing_sets/${set.id}`, {
        method: 'DELETE'
      })
      .then(() => dispatch(removeClimbingSet(set)));
    }

    return (
      <div className='admin-tools'>
          <Link to='climbing_sets/new'>Upload New Climbing Set</Link>
          <div className='admin-climbing-sets-container'>
            {climbingSets.map((set) => (
              <div className='admin-climbing-set' key={set.id}>
                <h1>{set.set_name}</h1>
                <h2>Week {set.week}</h2>
                <h4>Start: {set.formatted_start_date}</h4>
                <h4>End: {set.formatted_end_date}</h4>
                <div className='admin-set-edit-delete'>
                  <Link to={`climbing_sets/${set.set_name}`}>Edit</Link>
                  <button onClick={() => handleDeleteSet(set)}>Delete Set</button>
                </div>
                <button onClick = {() => toggleFormVisibility(set.id)}>
                  {showFormForSet[set.id] ? 'Hide' : 'Add Climbs'}
                </button>
                {showFormForSet[set.id] && <NewClimbForm set={set} />}
                <h2>Current Climbs:</h2>
                {set.climbs.map((climb) => (
                  <div key={climb.id} className='admin-climbs'>
                    <h3 >{climb.color} V{climb.grade}</h3>
                    <button onClick = {() => handleDeleteClimb(climb)}>Delete</button>
                  </div>
                ))}
              </div>
            ))}
          </div>

      </div>
    )
}

export default Admin;
