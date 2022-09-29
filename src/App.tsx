import React from "react";
import s from "./App.module.css";
import {Header} from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import {BrowserRouter} from "react-router-dom";

type AppPropsType = {
	state: StateType
}

type StateType = {
	DialogsPage: object
	ProfilePage: object
}

function App(props:AppPropsType) {
	return (
		<BrowserRouter>
			<div className={s.App}>
				<Header/>
				<Navbar/>
				<Content state={props.state}/>
			</div>
		</BrowserRouter>

	);
}

export default App;
