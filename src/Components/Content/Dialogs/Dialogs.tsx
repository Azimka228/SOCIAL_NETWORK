import React from "react";
import s from "./Dialogs.module.css"
import User from "./User/User";
import MessageContainer from "./Message/MessageContainer";

const Dialogs = (props: any) => {

	return (
		<div className={s.Content}>
			<div className={s.Dialog_users}>
				<User users={props.store.usersData}/>
			</div>
			<div className={s.messages}>
				<MessageContainer/>
			</div>
		</div>
	);
};

export default Dialogs;