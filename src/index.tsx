import React from "react";
import "./index.module.css";
import store from "./redux/state";
import rerenderEntireTree from "./render";

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
