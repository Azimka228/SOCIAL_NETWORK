import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";
import React from "react";

const rerenderEntireTree = () => {
	ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch.bind(store)}/>, document.getElementById("root"));
}

export default rerenderEntireTree;