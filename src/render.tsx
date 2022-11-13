import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import React from "react";
import {Provider} from "react-redux";

const rerenderEntireTree = () => {

	ReactDOM.render(
		<Provider store={store}>
			<App store={store.getState()} dispatch={store.dispatch.bind(store)}/>
		</Provider>, document.getElementById("root"));
}

export default rerenderEntireTree;