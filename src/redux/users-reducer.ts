export type UserType = {
	followed :boolean
	id: number
	name: string
	photos: {small: string | null, large: string | null}
	status: string | null
	uniqueUrlName: string | null
}


let initialState:InitialStateType  = {
	Users: []
}

export type InitialStateType = {
	Users: Array<UserType>
}

const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"

const ProfileReducer = (state:InitialStateType = initialState, action: any):InitialStateType => {
	if (action.type === FOLLOW_USER) {
		state.Users = state.Users.map(el => {
			if (el?.id === action.userId) {
				return {...el, followed: true}
			} else {
				return {...el}
			}
		})
	} else if (action.type === UNFOLLOW_USER) {

		state.Users = state.Users.map(el => {
			if(el.id === action.userId) {
				return {...el, followed: false}
			} else {
				return {...el}
			}
		})
	} else if (action.type === SET_USERS) {
		return {...state,Users: [...action.users]}
	}
	return {...state}
};

export const followAC = (userId:number) => ({type: FOLLOW_USER, userId})
export const unfollowAC = (userId:number) => ({type: UNFOLLOW_USER, userId})
export const setUserAC = (users:any) => ({type: SET_USERS, users})


export default ProfileReducer;