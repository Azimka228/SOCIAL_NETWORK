import React from "react";
import s from './Post.module.css'
type PostPropsType = {
	avatar: string
	message: string
	likes: number
}

const Post = (props:PostPropsType) => {
	return (<>
			<div className={s.item}>
				<div className={s.avatar}>
					<img src={props.avatar} alt="avatar"/>
				</div>
				<div className="Posts_item_text">{props.message}</div>
				<div>{props.likes}👍</div>
			</div>
		</>

	);
};

export default Post;