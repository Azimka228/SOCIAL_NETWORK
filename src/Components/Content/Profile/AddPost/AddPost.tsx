import React from "react";

const AddPost = (props:any) => {
	const newPostElement = React.useRef<HTMLTextAreaElement>(null);
	const AppendPost = (): void => {
		let Post = (newPostElement.current?.value)
		props.dispatch({type:"ADD-POST",value:Post})
	}
	const ChangeTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		props.dispatch({type:"UPDATE-NEW-POST-TEXT",value:(e.currentTarget.value)})
	}
	return (
		<>
			<div className="Posts_input">
				<textarea onChange={ChangeTextAreaValue} value={props.newPostText} ref={newPostElement} />
			</div>
			<div className="Posts_button">
				<button onClick={AppendPost}>Send</button>
			</div>
		</>
	);
};

export default AddPost;