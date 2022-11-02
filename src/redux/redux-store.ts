import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";

let reducers = combineReducers({
	ProfilePage: ProfileReducer,
	DialogsPage: DialogsReducer,
})

let store = createStore(reducers)

export default store
