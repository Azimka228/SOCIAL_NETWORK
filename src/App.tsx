import React from "react";
import s from "./App.module.css";
import {Header} from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import {BrowserRouter} from "react-router-dom";

type AppPropsType = {
	store: any
	dispatch: any
}

export type StateType = {
	DialogsPage: object
	ProfilePage: object
}

function App(props:AppPropsType) {
	return (
		<BrowserRouter>
			<div className={s.App}>
				<Header/>
				<Navbar/>
				<Content
					store={props.store}
					dispatch={props.dispatch}
				/>

			</div>
		</BrowserRouter>

	);
}

export default App;
