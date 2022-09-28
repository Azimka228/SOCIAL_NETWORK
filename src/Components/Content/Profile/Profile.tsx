import React from "react";
import s from "./Profile.module.css"
import Post from "./Post/Post";
import AboutUser from "./AboutUser/AboutUser";
import AddPost from "./AddPost/AddPost";

const Profile = () => {

	const posts = [
		{
			avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
			message: "Hi",
			likes: 3,
		},
		{
			avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
			message: "Hello",
			likes: 12,
		},
		{
			avatar: "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg",
			message: "Wow",
			likes: 2,
		}
	]

	let PostsElements = posts.map((post) => (
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