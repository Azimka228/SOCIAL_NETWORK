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

	let TextareaText = React.useRef<HTMLTextAreaElement>(null)

	const AddMessage = () => {
		alert(TextareaText.current?.value)
	}

	return (
		<>
			{
				props.messages.map((message: MessageArrayType) => {
					return (<div className={s.message}>{message.text}</div>)
				})
			}
			<textarea ref={TextareaText}/>
			<button onClick={AddMessage}>ADD</button>
		</>
	);
};

export default Message;