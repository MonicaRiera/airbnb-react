import React from 'react'
import Nav from './Nav'
import Thumbnail from './Thumbnail'

class Confirm extends React.Component {
	state = {
		place: {id:0,
			img:'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg',
			type:'Entire Villa',
			rooms:7,
			title:'Luxury Villa Indu Siam',
			price: 350,
			rating: 4,
			reviews: 37,
			location:'Koh Samui, Thailand',
			guests: 10,
			baths: 6,
			description:'Stylish, tropical, luxurious, airy and absolute beach front, this villa combines form and function, enjoying magnificent views of Samui’s small islands and the sea beyond. With 520sqm of indoor/outdoor living space with 5 ensuite bedrooms, large living area, beachfront infinity pool, garden, air conditioned gym, professional pool table, bbq and Sala, this villa is perfect for up to 10 adults With 260sqm (2798sqfeet) of living space and 250sqm (2,700sqfeet) of outdoor space.',
			liked: true}
	}
	render () {
		return (
			<>
			<Nav />
			<div className="grid medium">
				<div className="grid sidebar-left">
					<div className="sidebar">
						<Thumbnail place={this.state.place} />
					</div>
					<div className="content">
						<h2>Confirm Booking</h2>
						<form>
							<div className="group">
								<label>From</label>
								<input type="text" value="12/11/2019"/>
							</div>
							<div className="group">
								<label>To</label>
								<input type="text" value="15/11/2019"/>
							</div>
							<div className="group">
								<label>Guests</label>
								<select>
									<option>1 guest</option>
									<option>2 guests</option>
									<option>3 guests</option>
									<option selected>4 guests</option>
									<option>5 guests</option>
									<option>6 guests</option>
									<option>7 guests</option>
									<option>8 guests</option>
									<option>9 guests</option>
									<option>10 guests</option>
								</select>
							</div>
							<div className="group">
								<label>Total: 3 nights</label>
								<h2>$1,050</h2>
							</div>
							<button className="primary">Confirm</button>
						</form>
						<hr/>
						<button>Cancel</button>
					</div>
				</div>
			</div>

			</>
		)

	}
}

export default Confirm;
