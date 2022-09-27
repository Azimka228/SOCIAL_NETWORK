import React from "react";
import s from './Navbar.module.css'
const Navbar = () => {
	return (
		<nav className={s.Navbar}>
			<div><a href="/profile">Profile</a></div>
			<div><a href="/message">Message</a></div>
			<div><a href="/groups">Groups</a></div>
			<div><a href="/settings">Settings</a></div>

		</nav>
	);
};

export default Navbar;