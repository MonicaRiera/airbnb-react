import React from 'react'
import Nav from './Nav'
import Thumbnail from './Thumbnail'
import axios from 'axios'

class Places extends React.Component {
	state = {
		places: [],
		filteredPlaces: [],
		maxRooms: 10,
		types: ['All Types', 'Entire Villa', 'Shared Villa', 'Entire House', 'Shared House', 'Private Room'],
		sortOptions: [{value:'date', option:'Latest'}, {value:'price', option:'Price'}, {value:'rating', option:'Rating'}],

		filters: {
			rooms: function(array, n) {return array.filter(p => p.bedrooms >= n)},
			types: function(array, t) {return array.filter(p => p.type.name === t)},
			price: function(array, n) {return array.filter(p => p.price <= n)},
			search: function(array, t) {return array.filter(p => p.title.toLowerCase().includes(t.toLowerCase()) || p.city.toLowerCase().includes(t.toLowerCase()) || p.country.toLowerCase().includes(t.toLowerCase()))}
		}
	}

	searchFilter = (event, filter) => {
		let places = this.state.places
		let input = event.target.value
		let filteredPlaces = this.state.filters[filter](places, input)
		this.setState({filteredPlaces: filteredPlaces})
	}

	componentWillMount() {
		axios.get('http://localhost:4000/places/')
		.then(res => {
			this.setState({
				places: res.data,
				filteredPlaces: res.data
			})
		})
		.catch(err => console.log(err))
	}

	render () {
		return (
			<>
			<Nav />
			<div className="filters">
				<select onChange={(e) => {this.searchFilter(e, 'rooms')}}>
					{
						[...Array(this.state.maxRooms)].map((e,i) =>
							<option value={i+1}>Rooms: {i+1}</option>
						)
					}
				</select>
				<select onChange={(e) => {this.searchFilter(e, 'types')}}>
					{
						this.state.types.map(e =>
							<option value="1">{e}</option>
						)
					}
				</select>
				<input onChange={(e) => {this.searchFilter(e, 'price')}} type="number" placeholder="max price" />
				<select>
					{
						this.state.sortOptions.map(e =>
							<option value={e.value}>{e.option}</option>
						)
					}
				</select>
				<input type="text" className="search" placeholder="Search..." onKeyUp={(e) => this.searchFilter(e, 'search')}/>
			</div>
			<div className="grid five large">
			{
				this.state.filteredPlaces.map((p,i) => <Thumbnail place={p} key={i} />)
			}
			</div>
			</>
		)
	}
}

export default Places;
