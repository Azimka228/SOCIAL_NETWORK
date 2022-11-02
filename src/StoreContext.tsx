import React from "react";
import store from "./redux/redux-store";

const StoreContext = React.createContext(store)


export default StoreContext;