import React from "react";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

export type ActionType = {
	type: string,
	newText?: string
	newBody?: string
}

let store = {
	_state: {
		DialogsPage: {
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
		},
		ProfilePage: {
			posts: [
				{
					id: 1,
					avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
					message: "Hi",
					likes: 3,
				},
				{
					id: 2,
					avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
					message: "Hi",
					likes: 3,
				},
				{
					id: 3,
					avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
					message: "Hello",
					likes: 12,
				},
				{
					id: 4,
					avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
					message: "Wow",
					likes: 2,
				}
			],
			newPostText: "hi"
		}

	},
	_callSubscriber() {
		console.log("changed")
	},
	getState() {
		return this._state
	},
	subscribe(observer: () => void) {
		this._callSubscriber = observer
	},

	dispatch(action: ActionType) {
		// @ts-ignore
		this._state.ProfilePage = ProfileReducer(this._state.ProfilePage,action)
		this._state.DialogsPage = DialogsReducer(this._state.DialogsPage,action)
		this._callSubscriber()

	}
}

export const addPostActionCreator = () => {
	return {type: ADD_POST}
}
export const updateNewPostTextActionCreator = (value: string) => {
	return {type: UPDATE_NEW_POST_TEXT, newText: value}
}

export const updateNewMessageBodyActionCreator = (value: string) => {
	return {type: UPDATE_NEW_MESSAGE_BODY, newBody:value}
}
export const sendMessageActionCreator = () => {
	return {type: SEND_MESSAGE}
}

export default store
// @ts-ignore
window.store = store