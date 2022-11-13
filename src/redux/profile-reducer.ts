const ADD_POST = "ADD-POST"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"

let initialState = {
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

const ProfileReducer = (state=initialState, action: any) => {
	if (action.type === ADD_POST) {
		const newPost = {
			avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
			id: 5,
			likes: 0,
			message: state.newPostText,
		}
		state.posts.push(newPost)
		state.newPostText = ""
	} else if (action.type === UPDATE_NEW_POST_TEXT && action.newText) {
		state.newPostText = action.newText
	}
return {...state}

};

export default ProfileReducer;