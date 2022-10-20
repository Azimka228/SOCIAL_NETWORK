import React, {ChangeEventHandler} from "react";
import s from "../Dialogs.module.css";
import {ActionType, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../../redux/state";

type MessagesPropsType = {
	state: MessageStateType
	dispatch: (action: ActionType) => void
}

type MessageStateType = {
	usersData:  Array<MessageArrayType>
	messagesData:  Array<MessageArrayType>
	newMessageBody: string
}
type MessageArrayType = {
	id: string
	text: string
}

const Message = (props: MessagesPropsType) => {

	const sendMessage = () => {
		props.dispatch(sendMessageActionCreator())
	}
	const updateNewMessageBody:ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		props.dispatch(updateNewMessageBodyActionCreator((e.currentTarget?.value)))
	}
	return (
		<>
			{
				props.state.messagesData.map((message: MessageArrayType) => {
					return (<div className={s.message}>{message.text}</div>)
				})
			}
			<textarea value={props.state.newMessageBody} onChange={updateNewMessageBody}/>
			<button onClick={sendMessage}>ADD</button>
		</>
	);
};

export default Message;