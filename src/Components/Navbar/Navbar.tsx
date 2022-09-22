import React from "react";
import s from './Navbar.module.css'
const Navbar = () => {
	return (
		<nav className={s.Navbar}>
			<div><a href="#">Profile</a></div>
			<div><a href="#">Message</a></div>
			<div><a href="#">Settings</a></div>
			<div><a href="#">Groups</a></div>
		</nav>
	);
};

export default Navbar;