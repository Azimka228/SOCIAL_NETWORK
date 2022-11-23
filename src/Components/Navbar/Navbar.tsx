import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (

		<nav className={s.Navbar}>
			<div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
			<div className={s.item}><NavLink to="/message" activeClassName={s.active} >Message</NavLink></div>
			<div className={s.item}><NavLink to="/users" activeClassName={s.active} >Users</NavLink></div>
			{/*<div><a href="/groups">Groups</a></div>*/}
			{/*<div><a href="/settings">Settings</a></div>*/}
		</nav>
	);
};

export default Navbar;