import ReactDOM from "react-dom";
import App from "./App";
import state, {addPost, updateNewPostText} from "./redux/state";
import React from "react";

const rerenderEntireTree = () => {
	ReactDOM.render(<App state={state} addPost={addPost}
						 updateNewPostText={updateNewPostText}/>, document.getElementById("root"));
}

export default rerenderEntireTree;