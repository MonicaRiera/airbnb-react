import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Thumbnail from './Thumbnail'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

class Bookings extends React.Component {
	state = {
		places : [
			{id:0,
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
				liked: true,
				booked: true,
				initialDate: '10 Aug 2020',
				finalDate: '15 Aug 2020',
				nights: 5},

			{id:1,
				img:'https://a0.muscache.com/im/pictures/ce1afaa5-1989-46f3-97b5-de337cd21a8b.jpg?aki_policy=large',
				type:'Entire House',
				rooms:5,
				title:'Istanbul Single family home',
				price: 155,
				rating: 3,
				reviews: 45,
				location:'Istanbul, Turkey',
				guests: 10,
				baths: 6,
				description:'Stylish, tropical, luxurious, airy and absolute beach front, this villa combines form and function, enjoying magnificent views of Samui’s small islands and the sea beyond. With 520sqm of indoor/outdoor living space with 5 ensuite bedrooms, large living area, beachfront infinity pool, garden, air conditioned gym, professional pool table, bbq and Sala, this villa is perfect for up to 10 adults With 260sqm (2798sqfeet) of living space and 250sqm (2,700sqfeet) of outdoor space.',
				liked: false,
				booked: true,
				initialDate: '15 Aug 2019',
				finalDate: '18 Aug 2019',
				nights: 3},

			{id:2,
				img:'https://a0.muscache.com/im/pictures/5a88ad2b-5201-48b6-b462-534b356e60fa.jpg?aki_policy=large',
				type:'Shared Villa',
				rooms:'7',
				title:'Most Beautiful Villa on Bosphorus Istanbul',
				price: 745,
				rating: 5,
				reviews: 29,
				location:'Istanbul, Turkey',
				guests: 10,
				baths: 6,
				description:'Stylish, tropical, luxurious, airy and absolute beach front, this villa combines form and function, enjoying magnificent views of Samui’s small islands and the sea beyond. With 520sqm of indoor/outdoor living space with 5 ensuite bedrooms, large living area, beachfront infinity pool, garden, air conditioned gym, professional pool table, bbq and Sala, this villa is perfect for up to 10 adults With 260sqm (2798sqfeet) of living space and 250sqm (2,700sqfeet) of outdoor space.',
				liked: false,
				booked: true,
				initialDate: '27 Dec 2018',
				finalDate: '03 Gen 2019',
				nights: 7}
		],
		className: 'Bookings',
		user:{
			name:'',
			avatar:''
		}
	}

	UNSAFE_componentWillMount() {
		let token = localStorage.getItem('token')
		axios.get(`http://localhost:4000/auth?token=${token}`)
		.then(res => {
			console.log(res)
			this.setState({
				user: res.data
			})
		})
	}

	render () {
		return (
			<>
			<Nav user={this.state.user}/>
			<div className="grid medium">
				<div className="grid sidebar-left">
					<Sidebar className={this.state.className}/>
					<div className="content">
						<h2>Upcoming Trips</h2>
						<div className="grid two">
							<Thumbnail place={this.state.places[0]} />
						</div>
						<h2>Past Trips</h2>
						<div className="grid two">
							<Thumbnail place={this.state.places[1]}/>
							<Thumbnail place={this.state.places[2]}/>
						</div>
					</div>
				</div>
			</div>
			</>

		)
	}
}

export default withRouter(Bookings);
