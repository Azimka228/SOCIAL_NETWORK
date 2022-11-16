import React from "react";
import s from "./Users.module.css"
import axios from "axios";

class Users extends React.Component<any, any> {

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.Page}&count=${this.props.countPerPage}`).then(response => {
			this.props.setUsers(response.data.items);
			this.props.setTotalCount(response.data.totalCount);
			console.log(response.data.totalCount)
		})

	}



	render() {

		let pages = this.props.TotalCount / this.props.countPerPage
		let sitePages = []
		for (let i = 0; i <= pages; i++) {
			sitePages.push(i)
		}
		let firstPage = 0
		let lastPage = 5
		const onClickChangePage = (page:number) => {

			this.props.setCurrentPage(page)
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.Page}&count=${this.props.countPerPage}`).then(response => {
				this.props.setUsers(response.data.items);
			})
			console.log(page)
		}
		const decrementCountPage = () => {
			if (firstPage !== 0) {
				firstPage--;
			}
		}
		const incrementCountPage = () => {
			if (firstPage !== 0) {
				lastPage++;
			}
		}
		return (

			<>
				<div>
					<button onClick={decrementCountPage}> {"<"} </button>
					{sitePages && sitePages.map(el => {
						if(el > 5 && el < 10) {
							return <span onClick={() => onClickChangePage(el)}> {el} </span>
						} else {
							return
						}

					})}
					<button onClick={incrementCountPage}> {">"} </button>
				</div>
				<div>
					{this.props.users.map((el: any) => {

						return (
							<>
								<div className={s.photo}>
									<img alt="photo" src={el.photo? el.photo : "https://cdn-icons-png.flaticon.com/512/3003/3003035.png"}/>
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

			</>

		);
	}
}

export default Users;