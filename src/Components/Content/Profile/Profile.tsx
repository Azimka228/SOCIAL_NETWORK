import React from "react";
import s from "./Profile.module.css"

const Profile = () => {
	return (
		<div className={s.Content}>
			<img src="https://www.interfax.ru/ftproot/photos/photostory/2019/10/16/wild1_700.jpg" alt="dda"/>
			<div className="aboutUser">
				<div className="avatar"></div>
				<div className="text">
					<div className="title">Dmitriy</div>
					<div className="main">Text about Dima</div>
				</div>
			</div>
			<div className="Posts">
				<div className="Posts_title"></div>
				<div className="Posts_input">
					<input type="text"/>
				</div>
				<div className="Posts_button">
					<button>Send</button>
				</div>
				<div className="Posts_items">
					<div className="Posts_item">
						<div className="Posts_item_avatar">AVATAR</div>
						<div className="Posts_item_text">Hey, how are you?</div>
					</div>
					<div className="Posts_item">
						<div className="Posts_item_avatar">AVATAR</div>
						<div className="Posts_item_text">Hey, how are you?</div>
					</div>
					<div className="Posts_item">
						<div className="Posts_item_avatar">AVATAR</div>
						<div className="Posts_item_text">Hey, how are you?</div>
					</div>
				</div>
			</div>

		</div>
	);
};

export default Profile;