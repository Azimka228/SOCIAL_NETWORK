import React from "react";

const AddPost = () => {
	const newPostElement = React.useRef<HTMLTextAreaElement>(null);
	const AppendPost = (): void => {
		alert(newPostElement.current?.value)
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