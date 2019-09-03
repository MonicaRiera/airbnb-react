import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Thumbnail from './Thumbnail'

class Favorites extends React.Component {
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
				liked: true},

				{id:7,
					img:'https://a0.muscache.com/im/pictures/41c7e4a0-d238-4de7-a2f1-b8fa47f2f3dc.jpg?aki_policy=large',
					type:'Entire Home',
					rooms:2,
					title:'Waikoloa Beach Villas H32',
					price: 184,
					rating: 4,
					reviews: 26,
					location:'Puako, HI, United States',
					guests: 4,
					baths: 2,
					description:'2 BEDROOM 2 BATH WITH NEW FURNITURE AND NEW BBQ OUTDOOR KITCHEN! AMAZING LAKE AND GOLF VIEWS! It is a great time to visit the Big Island, book your reservation today to see our amazing island! FREE WIFI AND PARKING Our unit is across from the Queens’ Market Place shopping village and has views of the golf course & lake. It is an elegant 2 bedroom, 2 bath top floor vacation retreat with all the comforts of your own home, including gourmet-equipped kitchen, private lanai and a brand new gas grill! Elevator & complimentary parking. Master bedroom has a king size bed and guest also has a king bed.  FREE WIFI AND PARKING.  Complex offers two swimming pools and spas and a private gym. We are a short walk to A bay for snorkeling and other water activities.  It also includes golf discount membership which allows all of  guests to golf at discounted rates. $50 for the Kings Course & $75 for the Beach Course.',
					liked: true},

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

		className: 'Favorites'
	}
	render () {
		return (
			<>
			<Nav />
			<div className="grid medium">
				<div className="grid sidebar-left">
					<Sidebar className={this.state.className}/>
					<div className="content">
						<h2>My Favorites</h2>
						<div className="grid two">
							{
								this.state.places.map((e,i) => <Thumbnail place={e} key={i}/>)
							}
						</div>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default Favorites;
