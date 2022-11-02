import React from "react";
import {ActionType, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../../redux/store";
import Message from "./Message";

type MessagesPropsType = {
	store: MessageStateType
	dispatch: (action: ActionType) => void
}

type MessageStateType = {
	usersData: Array<MessageArrayType>
	messagesData: Array<MessageArrayType>
	newMessageBody: string
}
type MessageArrayType = {
	id: string
	text: string
}

const MessageContainer = (props: MessagesPropsType) => {

	const sendMessage = () => {
		props.dispatch(sendMessageActionCreator())
	}
	const updateNewMessageBody = (e:string) => {
		props.dispatch(updateNewMessageBodyActionCreator((e)))
	}
	return (<Message
		messagesData={props.store.messagesData}
		newMessageBody={props.store.newMessageBody}
	 sendMessage={sendMessage}
		updateNewMessageBody={updateNewMessageBody}
	/>)
};

export default MessageContainer;