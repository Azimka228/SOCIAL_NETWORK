import React from "react";

const AddPost = (props:any) => {
	const newPostElement = React.useRef<HTMLTextAreaElement>(null);
	const AppendPost = (): void => {
		let Post = (newPostElement.current?.value)
		props.addPost(Post)
	}
	return (
		<>
			<div className="Posts_input">
				<textarea ref={newPostElement} />
			</div>
			<div className="Posts_button">
				<button onClick={AppendPost}>Send</button>
			</div>
		</>
	);
};

export default AddPost;