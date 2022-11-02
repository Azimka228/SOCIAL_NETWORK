import React, {ChangeEventHandler} from "react";
import s from "../Dialogs.module.css";

type MessagesPropsType = {
	sendMessage: () => void
	updateNewMessageBody: (body:string) => void
	messagesData: any
	newMessageBody: any
}



const Message = (props: MessagesPropsType) => {

	const OnSendMessageClick = () => {
		props.sendMessage()
	}
	const updateNewMessageBody:ChangeEventHandler<HTMLTextAreaElement> = (e) => {
		props.updateNewMessageBody((e.currentTarget?.value))
	}
	return (
		<>
			{
				props.messagesData.map((message:any) => {
					return (<div className={s.message}>{message.text}</div>)
				})
			}
			<textarea value={props.newMessageBody} onChange={updateNewMessageBody}/>
			<button onClick={OnSendMessageClick}>ADD</button>
		</>
	);
};

export default Message;