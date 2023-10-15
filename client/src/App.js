import React, { useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

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
        <Routes>
        </Routes>
      </div>
  );
}

export default App;