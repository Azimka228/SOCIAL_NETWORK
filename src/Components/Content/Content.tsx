import React from "react";
import s from "./Content.module.css"
import Dialogs from "./Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";

type ContentPropsType = {
	state: any
	addPost: any
	updateNewPostText: any
}

const Content = (props: ContentPropsType) => {
	return (
		<div className={s.Content}>
			<Switch>
				<Route path="/message" render={() => <Dialogs state={props.state.DialogsPage}/>}/>
				<Route path="/profile"
					   render={() => <Profile
						   state={props.state.ProfilePage}
						   addPost={props.addPost}
						   updateNewPostText={props.updateNewPostText}
					   />}/>

			</Switch>
		</div>
	);
};

export default Content;