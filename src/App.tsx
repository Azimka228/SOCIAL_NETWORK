import React from 'react';
import s from './App.module.css';
import {Header} from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";

function App() {
  return (
    <div className={s.App}>
        <Header/>
        <Navbar/>
        <Content/>
    </div>
  );
}

export default App;
