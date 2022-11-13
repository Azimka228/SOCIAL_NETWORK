const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
	usersData: [
		{id: "1", name: "Egor"},
		{id: "2", name: "Misha"},
		{id: "3", name: "Artyom"},
		{id: "4", name: "Serafim"},
	],
	messagesData: [
		{id: "1", text: "Hi"},
		{id: "2", text: "My dear"},
		{id: "3", text: "YEAH"},
	],
	newMessageBody: "das"
}

const DialogsReducer = (state=initialState, action: any) => {

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
		return {...state}
	}
;

export default DialogsReducer;