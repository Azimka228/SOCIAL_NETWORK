import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {follow, setCurrentPage, setTotalCount, setUsers, unfollow, UserType} from "../../../redux/users-reducer";
import {appStateType} from "../../../redux/redux-store";

type mapStateToProps = {
	users: Array<UserType>
	TotalCount: number
	countPerPage: number
	Page: number
}

let mapStateToProps = (state: appStateType): mapStateToProps => {
	return {
		users: state.UsersPage.Users,
		TotalCount: state.UsersPage.TotalCount,
		countPerPage: state.UsersPage.countPerPage,
		Page: state.UsersPage.Page
	}
}

// type mapDispatchToProps = {
// 	follow: (userID:number) => void
// 	unfollow: (userID:number) => void
// 	setUsers: (users: UserType) => void
// 	setTotalCount: (count:number) => void
// 	setCurrentPage: (page:number) => void
// }

// let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToProps => {
//
// 	return {
// 		follow: (userID:number) => {
// 			dispatch(followAC(userID))
// 		},
// 		unfollow: (userID:number) => {
// 			dispatch(unfollowAC(userID))
// 		},
// 		setUsers: (users: UserType) => {
// 			dispatch(setUserAC(users))
// 		},
// 		setCurrentPage: (page:number) => {
// 			dispatch(setCurrentPageAC(page))
// 		},
// 		setTotalCount: (count:number) => {
// 			dispatch(setTotalCountAC(count))
// 		}
// 	}
// }

let mapDispatchToProps = {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalCount
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
