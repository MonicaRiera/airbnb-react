import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {
	state = {
		user: {
			avatar: '',
			name: '',
			email: '',
			location: ''
		},

		className : 'Profile'
	}

	logout = () => {
		localStorage.removeItem('token')
		this.props.history.push({
			pathname: '/'
		})
	}

	UNSAFE_componentWillMount()  {
		let token = localStorage.getItem('token')
		if (token) {
			axios.get(`${process.env.REACT_APP_API}/auth?token=${token}`)
			.then(res => {
				console.log(res.data)
				this.setState({
					user: res.data
				})
			})
		}

	}
	render () {
		return (
			<>
			<Nav user={this.state.user}/>
			<div className="grid medium">
				<div className="grid sidebar-left">
					<Sidebar className={this.state.className}/>
					<div className="content">
						<h2>My Profile</h2>
						<form>
							<div className="group">
								<label>Name</label>
								<input type="text" readOnly value={this.state.user.name}/>
							</div>
							<div className="group">
								<label>Email</label>
								<input type="email" readOnly value={this.state.user.email}/>
							</div>
							<div className="group">
								<label>Location</label>
								<input type="text" readOnly value={this.state.user.location}/>
							</div>
							<div className="group">
								<label>Profile Picture</label>
								<div className="user">
									<div className="avatar" style={{backgroundImage: 'url('+this.state.user.avatar+')'}}></div>
									<div className="name">
										<input type="file" />
									</div>
								</div>
							</div>
							<button>Save Changes</button>
						</form>
						<hr/>
						<button className="secondary" onClick={this.logout}>Logout</button>
					</div>
				</div>
			</div>
			</>
		)

	}
}

export default withRouter (Profile);
