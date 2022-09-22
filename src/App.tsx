import React from 'react';
import s from './App.module.css';
import {Header} from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Content/Profile/Profile";

function App() {
  return (
    <div className={s.App}>
        <Header/>
        <Navbar/>
        <Profile/>
    </div>
  );
}

export default App;
