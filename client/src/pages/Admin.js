import React, { useState} from 'react'
import { Link } from 'react-router-dom';

import NewClimbForm from '../components/NewClimbForm';

import { useSelector } from 'react-redux'

function Admin() {

    const [showFormForSet, setShowFormForSet] = useState({});

    const climbingSets = useSelector(state => state.climbingSets);

    function toggleFormVisibility(setId) {
      setShowFormForSet((prevState) => ({ ...prevState, [setId]: !prevState[setId]}));
    };

    return (
      <div>
          <Link to='climbing_sets/new'>Upload New Climbing Set</Link>
          {climbingSets.map((set) => (
            <div key={set.id}>
              <h1>{set.set_name} - Week {set.week}</h1>
              <h2>Current Climbs:</h2>
              {set.climbs.map((climb) => (
                <li key={climb.id}>{climb.color} V{climb.grade}</li>
              ))}
              <button onClick = {() => toggleFormVisibility(set.id)}>
                {showFormForSet[set.id] ? 'Hide Form' : 'Add Climbs'}
              </button>
              {showFormForSet[set.id] && <NewClimbForm set={set} />}
            </div>
          ))}

      </div>
    )
}

export default Admin;


// change lin to just a form to show up for climbing sets/new? or change foprms to links? maybe opage could open over admin page and dim background

//import all admin tool component directly here?
