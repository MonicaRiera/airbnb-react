import React from 'react'
import {Link} from 'react-router-dom'

class Nav extends React.Component {
	state = {
		user: {
			name: '',
			avatar: ''
		}
	}

	UNSAFE_componentWillReceiveProps(props) {
		this.setState({user: props.user})
	}

	render () {
		return (
			<nav>
				<Link to="/places" className="logo"></Link>
				<div className="profile">
					<Link to="/profile" className="button">
						<div className="avatar" style={{backgroundImage: 'url('+ this.state.user.avatar +')'}}></div>
						<span>{this.state.user.name}</span>
					</Link>
				</div>
			</nav>
		)
	}
}

export default Nav;
