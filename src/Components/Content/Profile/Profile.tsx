import React from "react";
import s from "./Profile.module.css"
import Posts from "./Posts/Posts";
import AboutUser from "./AboutUser/AboutUser";
import AddPost from "./AddPost/AddPost";

const Profile = () => {
	return (
		<div className={s.Content}>
			<img src="https://www.interfax.ru/ftproot/photos/photostory/2019/10/16/wild1_700.jpg" alt="dda"/>
			<AboutUser/>
			<AddPost/>
			<Posts/>
		</div>
	);
};

export default Profile;