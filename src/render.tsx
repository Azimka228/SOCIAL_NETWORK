import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App, {StateType} from "./App";
import  {addPost} from "./redux/state";



export let rerenderEntireTree = (state:StateType) => {
	ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById("root"));
}
