import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import React from "react";
import StoreContext from "./StoreContext";

const rerenderEntireTree = () => {

	ReactDOM.render(
		<StoreContext.Provider value={store}>
			<App store={store.getState()} dispatch={store.dispatch.bind(store)}/>
		</StoreContext.Provider>, document.getElementById("root"));
}

export default rerenderEntireTree;