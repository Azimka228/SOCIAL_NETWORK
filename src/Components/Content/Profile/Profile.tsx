import React from "react";
import s from "./Profile.module.css"
import Post from "./Post/Post";
import AboutUser from "./AboutUser/AboutUser";
import AddPost from "./AddPost/AddPost";

const Profile = () => {
	return (
		<div className={s.Content}>
			<AboutUser/>
			<AddPost/>
			<Post  avatar={'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'} message={'Hi'} likes={3}/>
			<Post  avatar={'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg'} message={'LOX'} likes={1}/>
		</div>
	);
};

export default Profile;