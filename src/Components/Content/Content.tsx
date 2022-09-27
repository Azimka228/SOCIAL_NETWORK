import React from "react";
import s from "./Content.module.css"
import Dialogs from "./Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Profile/Profile";

const Content = () => {
	return (
		<BrowserRouter>
			<div className={s.Content}>
				<Route path={"/message"} component={Dialogs}/>
				<Route path={"/profile"} component={Profile}/>
			</div>
		</BrowserRouter>

	);
};

export default Content;