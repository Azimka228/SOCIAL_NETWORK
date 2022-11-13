import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUserAC, unfollowAC, UserType} from "../../../redux/users-reducer";
import {appStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToProps = {
	users: Array<UserType>
}

let mapStateToProps = (state: appStateType): mapStateToProps => {
	return {
		users: state.UsersPage.Users
	}
}

type mapDispatchToProps = {
	follow: (userID:number) => void
	unfollow: (userID:number) => void
	setUsers: (users: UserType) => void
}

let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {

	return {
		follow: (userID:number) => {
			dispatch(followAC(userID))
		},
		unfollow: (userID:number) => {
			dispatch(unfollowAC(userID))
		},
		setUsers: (users: UserType) => {
			dispatch(setUserAC(users))
		}
	}
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
