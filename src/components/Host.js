import React from 'react'
import Thumbnail from './Thumbnail'
import Nav from './Nav'
import Sidebar from './Sidebar'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Host extends React.Component {
	state = {
		places: [
			{id:9,
				img:'https://a0.muscache.com/im/pictures/34b1e3ea-96ac-4085-aa5c-d47a32b246bb.jpg?aki_policy=large',
				type:'Private Room',
				rooms:1,
				title:'Sleep to the sounds of the ocean',
				price: 85,
				rating: 5,
				reviews: 13,
				location:'Honolulu, HI, United States',
				guests: 1,
				baths: 1,
				description:'SPECTACULAR SWEEPING PANORAMAS OF THE PACIFIC OCEAN. (THE REVIEWS CONFIRM EVERYTHING)THE PRIVATE BEDROOM AND PRIVATE BATHROOM LOCATED ON THE FIRST FLOOR OF THIS 4 STORY HOME. YOU WILL HAVE ACCESS TO THE ENTIRE FIRST FLOOR. A LIVING ROOM AND DINING AREA-WET BAR KITCHENETTE COMPLETE WITH A KITCHEN SINK and MINI REFRIGERATOR-MICROWAVE. YOU ALSO HAVE ACCESS TO THE SWIMMING POOL. Over  2000 square feet of living space for your total comfort.  Theres the private marbled floor bedroom with balcony and private marbled walled bathroom--please note **this is NOT an ensuite thus your private bathroom is located down the stairs next to swimming pool. It is a large marbled walled bathroom.  You also have a living room and dining area with a mini-kitchen/wet bar.  There is also a swimming pool for you to use.  There is another airbnb room on this floor that may b occupied. Complete total privacy is getting 2 rooms and then you can easily have 4 to 6 people.',
				liked: false},

			{id:10,
				img:'https://a0.muscache.com/im/pictures/84198993-4ece-4f7d-b12b-5830a68c9b5b.jpg?aki_policy=large',
				type:'Private Room',
				rooms:1,
				title:'Marriott’s Waikoloa Ocean Club',
				price: 300,
				rating: 4,
				reviews: 34,
				location:'Honolulu, HI, United States',
				guests: 1,
				baths: 1,
				description:'Stylish, tropical, luxurious, airy and absolute beach front, this villa combines form and function, enjoying magnificent views of Samui’s small islands and the sea beyond. With 520sqm of indoor/outdoor living space with 5 ensuite bedrooms, large living area, beachfront infinity pool, garden, air conditioned gym, professional pool table, bbq and Sala, this villa is perfect for up to 10 adults With 260sqm (2798sqfeet) of living space and 250sqm (2,700sqfeet) of outdoor space.',
				liked: true}
		],

		className: 'Host',
		user: {
			name:'',
			avatar:''
		}
	}

	UNSAFE_componentWillMount() {
		let token = localStorage.getItem('token')
		axios.get(`http://localhost:4000/auth?token=${token}`)
		.then(res => {
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
						<Link className="button primary" to="/create">Host new place</Link>
						<hr/>
						<h2>Places I'm hosting</h2>
						<div className="grid two">
							{
								this.state.places.map((e,i) => <Thumbnail place={e} key={i} />)
							}
						</div>
					</div>
				</div>
			</div>
		</>
		)
	}
}

export default Host;
