import React from "react";
import "./index.module.css";
import {subscribe} from "./redux/state";
import rerenderEntireTree from "./render";

rerenderEntireTree()
subscribe(rerenderEntireTree)
