import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import state from "./redux/state";

ReactDOM.render(
	<DevSupport ComponentPreviews={ComponentPreviews}
				useInitialHook={useInitial}
	>
		<App state={state}/>
	</DevSupport>,
	document.getElementById("root")
);