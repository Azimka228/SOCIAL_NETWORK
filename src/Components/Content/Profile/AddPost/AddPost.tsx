import React from "react";

type AddPostProps = {
	updateNewPostText:(el:string) => void
	addPost:() => void
	newPostText:string
}

const AddPost = (props: AddPostProps) => {
	const newPostElement = React.useRef<HTMLTextAreaElement>(null);
	const onAddPost = (): void => {
		props.addPost()
	}
	const onChangeTextAreaValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

		let text = e.currentTarget.value
		props.updateNewPostText(text)
	}
	return (
		<>
			<div className="Posts_input">
				<textarea onChange={onChangeTextAreaValue} value={props.newPostText} ref={newPostElement}/>
			</div>
			<div className="Posts_button">
				<button onClick={onAddPost}>Send</button>
			</div>
		</>
	);
};

export default AddPost;