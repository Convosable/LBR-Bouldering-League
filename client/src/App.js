import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignUpForm from './components/SignUpForm';

import { useDispatch } from 'react-redux';
import { setUser } from "./redux/user";


function App() {

  const dispatch = useDispatch();

    useEffect(() => {
      fetch("/me")
      .then((r) => {
        if (r.ok) {
          r.json().then((user) => dispatch(setUser(user)));
        }
      });
    }, []);

  return (
      <div className="App">
        <NavBar />
        <SignUpForm />
        <Routes>
        </Routes>
      </div>
  );
}

export default App;