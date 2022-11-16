export type UserType = {
	followed :boolean
	id: number
	name: string
	photos: {small: string | null, large: string | null}
	status: string | null
	uniqueUrlName: string | null
}


let initialState:InitialStateType  = {
	Users: [],
	TotalCount: 0,
	Page: 2,
	lastPage: 4,
	countPerPage: 3,
}

export type InitialStateType = {
	Users: Array<UserType>
	TotalCount: number
	countPerPage: number
	Page: number
	lastPage: 4,
}

const FOLLOW_USER = "FOLLOW_USER"
const UNFOLLOW_USER = "UNFOLLOW_USER"
const SET_USERS = "SET_USERS"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

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
	}else  if (action.type === SET_TOTAL_COUNT) {
		return {...state, TotalCount: action.count}
	}else if (action.type === SET_CURRENT_PAGE){
		return {...state, Page: action.page}
	}
	return {...state}
};

export const follow = (userId:number) => ({type: FOLLOW_USER, userId})
export const unfollow = (userId:number) => ({type: UNFOLLOW_USER, userId})
export const setUsers = (users:any) => ({type: SET_USERS, users})
export const setTotalCount = (count:number) => ({type: SET_TOTAL_COUNT, count})
export const setCurrentPage = (page:number) => ({type: SET_CURRENT_PAGE, page})


export default ProfileReducer;