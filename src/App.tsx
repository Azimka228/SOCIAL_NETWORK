import React from "react";
import s from "./App.module.css";
import {Header} from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/Content/Content";
import {BrowserRouter} from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className={s.App}>
				<Header/>
				<Navbar/>
				<Content/>
			</div>
		</BrowserRouter>

	);
}

export default App;
