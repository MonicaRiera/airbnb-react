import React from 'react'
import Review from './Review'
import Gallery from './Gallery'
import Nav from './Nav'
import axios from 'axios'

class Place extends React.Component {
	state = {
		place: {
			images: [],
			type: {
				name: ''
			},
			amenities: [
				{name:'', icon:''}
			],
			host: {
				avatar:'',
				name:''
			},
			rating: 0,
			reviews: []
		},

		amenities: [
			{className:'fas fa-utensils', title:'Kitchen'},
			{className:'fas fa-dumbbell', title:'Gym'},
			{className:'fas fa-wifi', title:'Wi-Fi'},
			{className:'fas fa-tshirt', title:'Iron'},
			{className:'fas fa-swimmer', title:'Swimming Pool'},
			{className:'fas fa-wind', title:'Air Conditioning'},
			{className:'fas fa-tv', title:'TV'},
		],

		maxGuests: 10,

	}

	componentWillMount() {
		axios.get('http://localhost:4000/places/5d71f584ee4204aa748de72d')
		.then(res => {
			console.log(res.data)
			this.setState({place: res.data})
		})
		.catch(err => console.log(err))
	}

	render () {
		return (
			<>
			<Nav />
			<Gallery images={this.state.place.images}/>
			<div className="grid medium">
				<div className="grid sidebar-right">
					<div className="content">
						<h1>{this.state.place.title}</h1>
						<small>
							<i className="fas fa-map-marker-alt"></i>
							<span>{this.state.place.city}, {this.state.place.country}</span>
						</small>
						<div className="user">
							<div className="avatar" style={{backgroundImage: `url(${this.state.place.host.avatar})`}}></div>
							<div className="name">
								<small>Hosted by</small>
								<span>{this.state.place.host.name}</span>
							</div>
						</div>
						<div className="card specs">
							<div className="content">
								<ul className="grid two">
									<li><i className="fas fa-fw fa-home"></i>{this.state.place.type.name}</li>
									<li><i className="fas fa-fw fa-user-friends"></i>{this.state.place.guests} guests</li>
									<li><i className="fas fa-fw fa-bed"></i>{this.state.place.bedrooms} bedrooms</li>
									<li><i className="fas fa-fw fa-bath"></i>{this.state.place.bathrooms} baths</li>
								</ul>
							</div>
						</div>
						<p>{this.state.place.description}</p>
						<h3>Amenities</h3>
						<div className="card specs">
							<div className="content">
								<ul className="grid two">
									{
										this.state.place.amenities.map((e,i) => <li key={i}><i className={e.icon}></i>{e.name}</li>)
									}
								</ul>
							</div>
						</div>
						<Review reviews={this.state.place.reviews}/>
					</div>
					<div className="sidebar booking">
						<div className="card shadow">
							<div className="content large">
								<h3>${this.state.place.price}<small>per night</small></h3>
								<small>
								{
									[...Array(this.state.place.rating)].map((e, i) => <i className="fas fa-star" key={i}></i>)
								}
								{
									[...Array(5-this.state.place.rating)].map((e, i) => <i className="far fa-star" key={i}></i>)
								}
									<span>{this.state.place.reviews.length} Reviews</span>
								</small>
								<form className="small">
									<div className="group">
										<label>Dates</label>
										<input type="text" placeholder="Check-in"/>
										<input type="text" placeholder="Check-out"/>
									</div>
									<div className="group">
										<label>Guests</label>
										<select>
											{
												[...Array(this.state.place.guests)].map((e,i) => <option key={i}>{i+1} guests</option>)
											}
										</select>
									</div>
									<div className="group">
										<button className="secondary full">Book this place</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default Place;
