import React from 'react'
import Review from './Review'
import Gallery from './Gallery'
import Nav from './Nav'

class Place extends React.Component {
	state = {
		place: {profileImg: 'https://randomuser.me/api/portraits/women/2.jpg', host: 'Kitty', title: 'Luxury Villa Indu Siam', location: 'Koh Samui, Thailand', type: 'Entire Villa', guests: 10, rooms: 7, baths: 6, description: 'Stylish, tropical, luxurious, airy and absolute beach front, this villa combines form and function, enjoying magnificent views of Samui’s small islands and the sea beyond. With 520sqm of indoor/outdoor living space with 5 ensuite bedrooms, large living area, beachfront infinity pool, garden, air conditioned gym, professional pool table, bbq and Sala, this villa is perfect for up to 10 adults With 260sqm (2798sqfeet) of living space and 250sqm (2,700sqfeet) of outdoor space.', price: 350, rating: 4, reviews: 4},

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

	render () {
		return (
			<>
			<Nav />
			<Gallery />
			<div className="grid medium">
				<div className="grid sidebar-right">
					<div className="content">
						<h1>{this.state.place.title}</h1>
						<small>
							<i className="fas fa-map-marker-alt"></i>
							<span>{this.state.place.location}</span>
						</small>
						<div className="user">
							<div className="avatar" style={{backgroundImage: 'url('+this.state.place.profileImg+')'}}></div>
							<div className="name">
								<small>Hosted by</small>
								<span>{this.state.place.host}</span>
							</div>
						</div>
						<div className="card specs">
							<div className="content">
								<ul className="grid two">
									<li><i className="fas fa-fw fa-home"></i>{this.state.place.type}</li>
									<li><i className="fas fa-fw fa-user-friends"></i>{this.state.place.guests} guests</li>
									<li><i className="fas fa-fw fa-bed"></i>{this.state.place.rooms} bedrooms</li>
									<li><i className="fas fa-fw fa-bath"></i>{this.state.place.baths} baths</li>
								</ul>
							</div>
						</div>
						<p>{this.state.place.description}</p>
						<h3>Amenities</h3>
						<div className="card specs">
							<div className="content">
								<ul className="grid two">
									{
										this.state.amenities.map(e => <li><i className={e.className}></i>{e.title}</li>)
									}
								</ul>
							</div>
						</div>
						<Review />
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
									<span>{this.state.place.reviews} Reviews</span>
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
												[...Array(this.state.maxGuests)].map((e,i) => <option>{i+1} guests</option>)
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
