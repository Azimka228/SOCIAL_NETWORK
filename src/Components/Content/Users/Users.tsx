import React from "react";
import s from "./Users.module.css"
import axios from "axios";

// const Users = (props: any) => {
//
//
// 		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
// 			props.setUsers(response.data.items)
// 		})
//
// 	console.log(props)
// 	return (
// 		<div>
// 			{props.users.map((el: any) => {
//
//
// 				return (
// 					<>
// 						<div className={s.photo}>
// 							<img src={el.photo}/>
// 						</div>
// 						<div key={el.id}>{el.userName}</div>
// 						{el.followed ?
//
// 							<button onClick={() => {props.unfollow(el.id)}}>unfollow</button> :
// 							<button onClick={() => {props.follow(el.id)}}>follow</button>}
// 					</>
// 				)
// 			})}
// 		</div>
// 	);
// };

class Users extends React.Component<any, any> {

	componentDidMount() {
		axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
			this.props.setUsers(response.data.items)
			console.log(response.data.items)
		})

	}

	render() {
		return (
			<div>
				{this.props.users.map((el: any) => {

					return (
						<>
							<div className={s.photo}>
								<img alt="photo" src={el.photo}/>
							</div>
							<div>status - {el.status && el.status}</div>
							<div key={el.id}>{el.name}</div>
							{el.followed ?

								<button onClick={() => {
									this.props.unfollow(el.id)
								}}>unfollow</button> :
								<button onClick={() => {
									this.props.follow(el.id)
								}}>follow</button>}
						</>
					)
				})}
			</div>
		);
	}
}

export default Users;