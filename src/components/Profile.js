import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'


class Profile extends React.Component {
	state = {
		user: {profileImg: 'https://randomuser.me/api/portraits/men/9.jpg', name: 'Tony', email: 'tony@tortugacoders.com', location: 'Thailand'},

		className : 'Profile'
	}
	render () {
		return (
			<>
			<Nav />
			<div className="grid medium">
				<div className="grid sidebar-left">
					<Sidebar className={this.state.className}/>
					<div className="content">
						<h2>My Profile</h2>
						<form>
							<div className="group">
								<label>Name</label>
								<input type="text" value={this.state.user.name}/>
							</div>
							<div className="group">
								<label>Email</label>
								<input type="email" value={this.state.user.email}/>
							</div>
							<div className="group">
								<label>Location</label>
								<input type="text" value={this.state.user.location}/>
							</div>
							<div className="group">
								<label>Profile Picture</label>
								<div className="user">
									<div className="avatar" style={{backgroundImage: 'url('+this.state.user.profileImg+')'}}></div>
									<div className="name">
										<input type="file" />
									</div>
								</div>
							</div>
							<button>Save Changes</button>
						</form>
						<hr/>
						<button className="secondary">Logout</button>
					</div>
				</div>
			</div>
			</>
		)

	}
}

export default Profile;
