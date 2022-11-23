import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../../redux/store";
import Message from "./Message";
import {connect} from "react-redux";

const mapStateToProps = (store: { DialogsPage: { messagesData: any; newMessageBody: any; }; }) => {
	return {
		messagesData: store.DialogsPage.messagesData,
		newMessageBody: store.DialogsPage.newMessageBody
	}
}

const mapDispatchToProps = (dispatch: (arg0: { type: string; newBody?: string; }) => void) => {
	return {
		sendMessage : () => {
		dispatch(sendMessageActionCreator())
	},
		updateNewMessageBody : (e:string) => {
		dispatch(updateNewMessageBodyActionCreator((e)))
	}
	}
}

const MessageContainer = connect(mapStateToProps,mapDispatchToProps,)(Message)

export default MessageContainer;