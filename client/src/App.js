import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './pages/Login';
import Home from './pages/Home';

import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './redux/user';


function App() {

  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

    useEffect(() => {
      fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => dispatch(setUser(user)));
        }
      });
    }, []);

    if (!user) return <Login />;

  return (
      <div className="App">
        <h1>{user.username}</h1>
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
      </div>
  );
}

export default App;