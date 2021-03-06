import React from 'react'
import Nav from './Nav'
import Thumbnail from './Thumbnail'
import axios from 'axios'

class Places extends React.Component {
	state = {
		places: [],
		filteredPlaces: [],
		maxRooms: 10,
		types: [],
		sortOptions: [{value:'date', option:'Latest'}, {value:'price', option:'Price'}, {value:'rating', option:'Rating'}],

		filters: {
			rooms: function(x) {return `min_rooms=${x}`},
			types: function(x) {return `type=${x}`},
			price: function(x) {return `max_price=${x}`},
			search: function(x) {return `	text=${x}`}
		},

		user: {
			name:'',
			avatar:'',
			likes: []
		},
		token: ''
	}

	searchFilter = (event, filter) => {
		let input = event.target.value
		let query = this.state.filters[filter](input)
		axios.get(`${process.env.REACT_APP_API}/places?${query}`)
		.then(res => {
			let filteredPlaces = res.data
			this.setState({filteredPlaces: filteredPlaces})
		})
	}

	updateLiked = (e, placeId) => {
		e.preventDefault()
		axios.patch(`${process.env.REACT_APP_API}/users?token=${this.state.token}`, {place: placeId})
		.then(res => {
			let user = res.data
			console.log(user.likes)
			this.setState({user})
		})
		.catch(err => {
			console.log(err)
		})
	}

	componentDidMount() {
		let token = localStorage.getItem('token')
		Promise.all([
			axios.get(`${process.env.REACT_APP_API}/places/`),
			axios.get(`${process.env.REACT_APP_API}/types`),
			axios.get(`${process.env.REACT_APP_API}/auth?token=${token}`)
		])
		.then(([places, types, user]) => {
			this.setState({
				places: places.data,
				filteredPlaces: places.data,
				types: types.data,
				user: user.data,
				token: token
			})
		})
		.catch(err => console.log(err))
	}

	render () {
		return (
			<>
			<Nav user={this.state.user}/>
			<div className="filters">
				<select onChange={(e) => {this.searchFilter(e, 'rooms')}}>
					{
						[...Array(this.state.maxRooms)].map((e,i) =>
							<option value={i+1} key={i}>Rooms: {i+1}</option>
						)
					}
				</select>
				<select onChange={(e) => {this.searchFilter(e, 'types')}}>
					{
						this.state.types.map((e,i) => {
							return e.name === 'All Types' ? <option value={e._id} key={i} selected>{e.name}</option> : <option id={e._id} value={e._id} key={i}>{e.name}</option>
						})
					}
				</select>
				<input onChange={(e) => {this.searchFilter(e, 'price')}} type="number" placeholder="max price" />
				<select>
					{
						this.state.sortOptions.map((e,i) =>
							<option value={e.value} key={i}>{e.option}</option>
						)
					}
				</select>
				<input type="text" className="search" placeholder="Search..." onKeyUp={(e) => this.searchFilter(e, 'search')}/>
			</div>
			<div className="grid five large">
			{
				this.state.filteredPlaces.map((p,i) => <Thumbnail place={p} key={p._id} user={this.state.user}  updateLiked={this.updateLiked}/>)
			}
			</div>
			</>
		)
	}
}

export default Places;
