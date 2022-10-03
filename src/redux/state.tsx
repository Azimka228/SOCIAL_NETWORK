import React from "react";
import {rerenderEntireTree} from "../render";

let state = {
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
				id:1,
				avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
				message: "Hi",
				likes: 3,
			},
			{
				id:2,
				avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
				message: "Hi",
				likes: 3,
			},
			{
				id:3,
				avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
				message: "Hello",
				likes: 12,
			},
			{
				id:4,
				avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
				message: "Wow",
				likes: 2,
			}
		],
	}

}

export let addPost = (text: string) => {
	const newPost = {
		avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
		id: 5,
		likes: 0,
		message: text,
	}
	state.ProfilePage.posts.push(newPost)
	rerenderEntireTree(state)
}
export default state