import {combineReducers, createStore} from "redux";
import ProfileReducer from "./profile-reducer";
import DialogsReducer from "./dialogs-reducer";
import UsersReducer from "./users-reducer";

let rootReducer = combineReducers({
	ProfilePage: ProfileReducer,
	DialogsPage: DialogsReducer,
	UsersPage: UsersReducer,
})


export type appStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer)

export default store
