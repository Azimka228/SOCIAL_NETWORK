import React from "react";
import s from "./Profile.module.css"
import Post from "./Post/Post";
import AboutUser from "./AboutUser/AboutUser";
import AddPost from "./AddPost/AddPost";

const Profile = (props:any) => {
	const posts = props.state.posts

	let PostsElements = posts.map((post:any) => (
		<div><Post avatar={post.avatar} message={post.message} likes={post.likes}/></div>
	))

	return (
		<div className={s.Content}>
			<AboutUser/>
			<AddPost/>
			{PostsElements}
		</div>
	);
};

export default Profile;