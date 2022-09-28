import React from "react";
import s from "./Dialogs.module.css"
import User from "./User/User";
import Message from "./Message/Message";

const Dialogs = () => {

	const usersData = [
		{id: "1", name: "Egor"},
		{id: "2", name: "Misha"},
		{id: "3", name: "Artyom"},
		{id: "4", name: "Serafim"},
	]
	const messagesData = [
		{id: "1", text: "Hi"},
		{id: "2", text: "My dear"},
		{id: "3", text: "YEAH"},
	]


	return (
		<div className={s.Content}>
			<div className={s.Dialog_users}>
				<User users={usersData}/>
			</div>
			<div className={s.messages}>
				<Message messages={messagesData}/>
			</div>
		</div>
	);
};

export default Dialogs;