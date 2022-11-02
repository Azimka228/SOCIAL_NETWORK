import React from "react";
import s from "./Content.module.css"
import Dialogs from "./Dialogs/Dialogs";
import {Route, Switch} from "react-router-dom";
import Profile from "./Profile/Profile";

type ContentPropsType = {
	store: any
	dispatch: any
}

const Content = (props: ContentPropsType) => {
	return (
		<div className={s.Content}>
			<Switch>
				<Route path="/message" render={() => <Dialogs
					store={props.store.DialogsPage}
					dispatch={props.dispatch}
				/>}/>
				<Route path="/profile"
					   render={() => <Profile
									store={props.store.ProfilePage}
									dispatch={props.dispatch}
					   />}/>

			</Switch>
		</div>
	);
};

export default Content;