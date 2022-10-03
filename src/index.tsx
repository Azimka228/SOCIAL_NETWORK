import React from "react";
import "./index.module.css";
import {rerenderEntireTree} from "./render";
import state from "./redux/state";

rerenderEntireTree(state)