import React from "react";
import s from "../Dialogs.module.css";

type MessagesPropsType = {
	messages: Array<MessageArrayType>
}
type MessageArrayType = {
	id: string
	text: string
}

const Message = (props: MessagesPropsType) => {
	return (
		<>
			{
				props.messages.map((message: MessageArrayType) => {
					return (<div className={s.message}>{message.text}</div>)
				})
			}
		</>
	);
};

export default Message;