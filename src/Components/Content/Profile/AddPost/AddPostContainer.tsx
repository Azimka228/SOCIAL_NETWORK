import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/store";
import AddPost from "./AddPost";

const AddPostContainer = (props: any) => {
	const addPost = (): void => {
		props.dispatch(addPostActionCreator())
	}

	const updateNewPostText = (e: string) => {
		let action = updateNewPostTextActionCreator(e)
		props.dispatch(action)
	}

	return (
		<AddPost
			updateNewPostText={updateNewPostText}
			addPost={addPost}
			newPostText={props.store.newPostText}/>)
};

export default AddPostContainer;