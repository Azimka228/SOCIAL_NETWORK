import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

ReactDOM.render(
	<DevSupport ComponentPreviews={ComponentPreviews}
				useInitialHook={useInitial}
	>
		<App/>
	</DevSupport>,
	document.getElementById("root")
);