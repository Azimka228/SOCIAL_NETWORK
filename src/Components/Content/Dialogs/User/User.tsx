import React from "react";
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";

type UserPropsType = {
	users: Array<UserArrayType>
}
type UserArrayType = {
	id: string
	name: string
}


const User = (props: UserPropsType) => {
	return (
		<>
			{
				props.users.map((user: UserArrayType) => {
					let path = "/message/" + user.id
					return (<div className={s.user}>
							<NavLink to={path}>{user.name}</NavLink>
						</div>
					)
				})
			}
		</>
	);
};

export default User;