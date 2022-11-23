import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/store";
import AddPost from "./AddPost";
import {connect} from "react-redux";

// const AddPostContainer = (props: any) => {
// 	const addPost = (): void => {
// 		props.dispatch(addPostActionCreator())
// 	}
//
// 	const updateNewPostText = (e: string) => {
// 		let action = updateNewPostTextActionCreator(e)
// 		props.dispatch(action)
// 	}
//
// 	return (
// 		<AddPost
// 			updateNewPostText={updateNewPostText}
// 			addPost={addPost}
// 			newPostText={props.store.newPostText}/>)
// };

let mapStateToProps = (store: { ProfilePage: { newPostText: any; }; }) => {
	return {
		newPostText: store.ProfilePage.newPostText
	}

}

let mapDispatchToProps = (dispatch: (arg0: { type: string; }) => void) => {
	return {
		addPost: (): void => {
			dispatch(addPostActionCreator())
		},
		updateNewPostText: (e: string) => {
			let action = updateNewPostTextActionCreator(e)
			dispatch(action)
		}

	}
}
	const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost)

	export default AddPostContainer;