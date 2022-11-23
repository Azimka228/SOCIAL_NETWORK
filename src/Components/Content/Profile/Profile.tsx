import React from "react";
import s from "./Profile.module.css"
import Post from "./Post/Post";
import AboutUser from "./AboutUser/AboutUser";
import AddPostContainer from "./AddPost/AddPostContainer";

const Profile = (props:any) => {
	const posts = props.store.posts

	let PostsElements = posts.map((post:any) => (
		<div><Post avatar={post.avatar} message={post.message} likes={post.likes}/></div>
	))

	return (
		<div className={s.Content}>
			<AboutUser/>
			<AddPostContainer/>
			{PostsElements}
		</div>
	);
};


export default Profile;