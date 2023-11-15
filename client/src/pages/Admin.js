import React, { useState} from 'react'
import { Link } from 'react-router-dom';

import NewClimbForm from '../components/NewClimbForm';

import { useDispatch, useSelector } from 'react-redux'
import { removeClimbingSetClimb } from '../redux/climbingSets';

function Admin() {

    const [showFormForSet, setShowFormForSet] = useState({});

    const climbingSets = useSelector(state => state.climbingSets);

    const dispatch = useDispatch();

    function toggleFormVisibility(setId) {
      setShowFormForSet((prevState) => ({ ...prevState, [setId]: !prevState[setId]}));
    };

    function deleteClimb(climb) {
      fetch(`/climbing_sets/${climb.climbing_set_id}/climbs/${climb.id}`, {
        method: 'DELETE'
      })
      .then(() => dispatch(removeClimbingSetClimb(climb)));
    }

    return (
      <div>
          <Link to='climbing_sets/new'>Upload New Climbing Set</Link>
          {climbingSets.map((set) => (
            <div key={set.id}>
              <h1>{set.set_name} - Week {set.week}</h1>
              <button onClick = {() => toggleFormVisibility(set.id)}>
                {showFormForSet[set.id] ? 'Hide' : 'Add Climbs'}
              </button>
              {showFormForSet[set.id] && <NewClimbForm set={set} />}
              <h2>Current Climbs:</h2>
              {set.climbs.map((climb) => (
                <div>
                  <h3 key={climb.id}>{climb.color} V{climb.grade}</h3>
                  <button onClick = {() => deleteClimb(climb)}>Delete</button>
                </div>
              ))}
            </div>
          ))}

      </div>
    )
}

export default Admin;

//import all admin tool component directly here?
