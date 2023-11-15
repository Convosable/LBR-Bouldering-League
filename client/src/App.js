import './App.css';
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
import EditProfile from './pages/EditProfile';
import NotFound from './pages/NotFound';
import Admin from './pages/Admin';
import NewClimbingSetForm from './pages/NewClimbingSetForm';
import LoadingPage from './pages/LoadingPage';


import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from './redux/user';
import { setTeams } from './redux/teams';
import { setClimbingSets } from './redux/climbingSets';


function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

    useEffect(() => {
      fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => dispatch(updateUser(user)));
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

    if (!user ) return <Login />;

    // some laoding page after login complete if (climbingSetsLoading || teamsLoading) return <Loading />;

    //look over climb Sets loading..... maybe have to change user loading as welkl???? 

  return (
      <div className="App">
        <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/teams/:teamName' element={<TeamDetails />} />
            <Route exact path='/leaderboards' element={<Leaderboards />} />
            <Route exact path='/teams/new' element={<TeamSignup />} />
            <Route exact path='/climbing_sets' element={<ClimbingSets />} />
            <Route exact path='/climbing_sets/:setName' element={<ClimbingSetDetails />} />
            <Route exact path={`/${user.username}`} element={<Profile />} />
            <Route exact path={`/${user.username}/edit`} element={<EditProfile />} />
            <Route exact path={`/admin-tools`} element={<Admin />} />     
            <Route exact path={`/admin-tools/climbing_sets/new`} element={<NewClimbingSetForm />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
  );
}

export default App;

// change profile to /:username so other users can view other people profiles