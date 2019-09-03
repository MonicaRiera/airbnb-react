import React from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component {
	state = {
		menuOptions: [
			{option: 'Profile', selected: true},
			{option: 'Bookings', selected: false},
			{option: 'Favorites', selected: false},
			{option: 'Host', selected: false}
		],

		className: this.props.className
	}

	componentWillMount() {
		let menuOptions = this.state.menuOptions
		let className = this.state.className

		menuOptions.forEach(e => {
			e.option === className ? e.selected = true : e.selected = false
		})

		this.setState({
			menuOptions: menuOptions
		})
	}

	render () {
		return (
			<div className="sidebar">
				<ul>
					{
						this.state.menuOptions.map((e,i) =>
								<li className={e.selected ? "active" : ""}>
								<Link to={'/' + e.option.toLowerCase()}>{e.option}</Link>
							</li>
						)
					}
				</ul>
			</div>
		)
	}
}

export default Sidebar;
