import React from "react";
import s from "./Dialogs.module.css"
import User from "./User/User";
import Message from "./Message/Message";

const Dialogs = (props:any) => {


	return (
		<div className={s.Content}>
			<div className={s.Dialog_users}>
				<User users={props.state.usersData}/>
			</div>
			<div className={s.messages}>
				<Message messages={props.state.messagesData}/>
			</div>
		</div>
	);
};

export default Dialogs;