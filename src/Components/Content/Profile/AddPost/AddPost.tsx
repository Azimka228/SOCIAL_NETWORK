import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/state";

const AddPost = (props: any) => {
	const newPostElement = React.useRef<HTMLTextAreaElement>(null);
	const AppendPost = (): void => {
		props.dispatch(addPostActionCreator())
	}
	const ChangeTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

		props.dispatch(updateNewPostTextActionCreator((e.currentTarget.value)))
	}
	return (
		<>
			<div className="Posts_input">
				<textarea onChange={ChangeTextAreaValue} value={props.newPostText} ref={newPostElement}/>
			</div>
			<div className="Posts_button">
				<button onClick={AppendPost}>Send</button>
			</div>
		</>
	);
};

export default AddPost;