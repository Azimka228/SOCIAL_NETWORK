import React from "react";
import s from "./Content.module.css"
import Dialogs from "./Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";

type ContentPropsType = {
	state: any
	addPost: any
}

const Content = (props: ContentPropsType) => {

	return (

		<div className={s.Content}>
			<Switch>
				<Route path="/message" component={() => <Dialogs state={props.state.DialogsPage}/>}/>
				<Route path="/profile" component={() => <Profile state={props.state.ProfilePage} addPost={props.addPost}/>}/>
			</Switch>
		</div>
	);
};

export default Content;