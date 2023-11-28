import './App.css';
import React, { useEffect, useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './pages/Login';
import Home from './pages/Home';
import TeamDetails from './pages/TeamDetails';
import Leaderboards from './pages/Leaderboards';
import TeamSignup from './pages/TeamSignup';
import ClimbingSets from './pages/ClimbingSets';
import ClimbingSetDetails from './pages/ClimbingSetDetails';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import NewClimbingSetForm from './pages/NewClimbingSetForm';
import AccessDenied from './pages/AccessDenied';
import EditClimbingSetForm from './pages/EditClimbingSetForm';
import LoadingPage from './pages/LoadingPage';


import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/user';
import { setTeams } from './redux/teams';
import { setClimbingSets } from './redux/climbingSets';



function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch("/me")
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => dispatch(updateUser(user)));
      }
    });
  }, []);

  useEffect(() => {
      Promise.all([
        fetch("/teams").then((r) => r.ok ? r.json() : null),
        fetch("/climbing_sets").then((r) => r.ok ? r.json() : null)
      ]).then(([teamsData, setsData]) => {
        if (teamsData && setsData) {
          dispatch(setTeams(teamsData));
          dispatch(setClimbingSets(setsData));
        }
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user ) return <Login />;

  return (
      <div className="App">
        <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/teams/:slug' element={<TeamDetails />} />
            <Route exact path='/leaderboards' element={<Leaderboards />} />
            <Route exact path='/teams/new' element={<TeamSignup />} />
            <Route exact path='/climbing_sets' element={<ClimbingSets />} />
            <Route exact path={`/climbing_sets/:slug`} element={<ClimbingSetDetails />} />
            <Route exact path={`/${user.username}`} element={<Profile />} />
            <Route exact path={`/${user.username}/edit`} element={<EditProfile />} />
            {user.admin === true ? 
            <Route exact path='/admin-tools' element={<Admin />} /> : 
            <Route exact path="/admin-tools" element={<Navigate to="/access-denied" />} 
            />}    
            {user.admin === true ? 
            <Route exact path='/admin-tools/climbing_sets/new' element={<NewClimbingSetForm />} /> : 
            <Route exact path='/admin-tools/climbing_sets/new' element={<Navigate to="/access-denied" />} 
            />}
            {user.admin === true ? 
            <Route exact path='/admin-tools/climbing_sets/:setName' element={<EditClimbingSetForm />} /> : 
            <Route exact path='/admin-tools/climbing_sets/:setName' element={<Navigate to="/access-denied" />} 
            />}
            <Route exact path='access-denied' element={<AccessDenied/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
  );
}

export default App;