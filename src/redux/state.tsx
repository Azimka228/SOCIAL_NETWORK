import React from "react";

const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

export type ActionType = {
	type: string,
	newText: string
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
			newPostText: "hi",
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

		if (action.type === "ADD-POST") {
			const newPost = {
				avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
				id: 5,
				likes: 0,
				message: this._state.ProfilePage.newPostText,
			}
			this._state.ProfilePage.posts.push(newPost)
			this._state.ProfilePage.newPostText = ""
			this._callSubscriber()
		} else if (action.type === "UPDATE-NEW-POST-TEXT") {
			this._state.ProfilePage.newPostText = action.newText
			this._callSubscriber()
		}
	}
}

export const addPostActionCreator = () => {
	return {type: ADD_POST}
}
export const updateNewPostText = (value:string) => {
	return {type: UPDATE_NEW_POST_TEXT, newText: value}
}


export default store
// @ts-ignore
window.store = store