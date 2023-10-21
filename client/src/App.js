import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './pages/Login';
import Home from './pages/Home';
import TeamDetails from './pages/TeamDetails';
import Leaderboards from './pages/Leaderboards';
import TeamSignup from './pages/TeamSignup';
import ClimbingSets from './pages/ClimbingSets';
import ClimbingSetDetails from './pages/ClimbingSetDetails';
import Profile from './pages/Profile';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/user';
import { setTeams } from './redux/teams';
import { setClimbingSets } from './redux/climbingSets';


function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const teams = useSelector(state => state.teams)
  const climbingSets = useSelector(state => state.climbingSets)

    useEffect(() => {
      fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => dispatch(setUser(user)));
        }
      });
    }, []);

    useEffect(() => {
      fetch("/teams")
      .then((r) => {
        if(r.ok) {
          r.json().then(teams => {dispatch(setTeams(teams))});
        }
      })
    },[])

    useEffect(() => {
      fetch("/climbing_sets")
      .then((r) => {
        if(r.ok) {
          r.json().then(sets => {dispatch(setClimbingSets(sets))});
        }
      })
    }, [])

    if (!user) return <Login />;

    console.log(user)

  return (
      <div className="App">
        <h1>{user.username}</h1>
        <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/teams/:teamName' element={<TeamDetails />} />
            <Route exact path='/leaderboards' element={<Leaderboards />} />
            <Route exact path='/teams/new' element={<TeamSignup />} />
            <Route exact path='/climbing_sets' element={<ClimbingSets />} />
            <Route exact path='/climbing_sets/:setName' element={<ClimbingSetDetails />} />
            <Route exact path='/:username' element={<Profile />} />
          </Routes>
      </div>
  );
}

export default App;