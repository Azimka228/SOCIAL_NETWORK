const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

const DialogsReducer = (state: any, action: any) => {

		if (action.type === UPDATE_NEW_MESSAGE_BODY && action.newBody) {
			state.newMessageBody = action.newBody

		} else if (action.type === SEND_MESSAGE) {
			const newMessage = {
				id: "4",
				text: state.newMessageBody
			}
			state.messagesData.push(newMessage)
			state.newMessageBody = ""
		}
		return state
	}
;

export default DialogsReducer;