import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
	state = {
		user: {profileImg: 'https://randomuser.me/api/portraits/men/9.jpg', name: 'Tony'}
	}

	render () {
		return (
			<nav>
				<Link to="/places" className="logo"></Link>
				<div className="profile">
					<Link to="/profile" className="button">
						<div className="avatar" style={{backgroundImage: 'url('+ this.state.user.profileImg +')'}}></div>
						<span>{this.state.user.name}</span>
					</Link>
				</div>
			</nav>
		)
	}
}

export default Nav;
