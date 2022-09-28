import React from "react";
import s from "./Content.module.css"
import Dialogs from "./Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";

const Content = () => {

	return (

			<div className={s.Content}>
				<Switch>
					<Route path="/message" component={()=> {return <Dialogs/>}}/>
					<Route path="/profile" component={()=> {return <Profile/>}}/>
				</Switch>
			</div>
	);
};

export default Content;