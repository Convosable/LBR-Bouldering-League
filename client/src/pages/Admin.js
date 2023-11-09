import React from 'react'

import { Link } from 'react-router-dom';

function Admin() {
  return (
    <div>
        <Link to='climbing_sets/new'>Upload New Climbing Set</Link>
    </div>
  )
}

export default Admin;