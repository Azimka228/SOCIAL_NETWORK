import React from "react";
import s from "./AboutUser.module.css"

const AboutUser = () => {
	return (
		<>
			<div className={s.aboutUser}>
				<div className={s.avatar}>
					<div className={s.avatar_img}>
						<img alt="avatar" src="https://biogr.net/wp-content/uploads/2021/02/v3MoXpqDHTc.jpg"/>
					</div>
				</div>
				<div className="text">
					<div className="title">Dmitriy</div>
					<div className="main">Text about Dima</div>
				</div>
			</div>
		</>
	);
};

export default AboutUser;