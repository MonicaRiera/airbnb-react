import React from 'react'
import Nav from './Nav'
import Thumbnail from './Thumbnail'


class Places extends React.Component {
	state = {
		places: [
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
				liked: false},

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
				liked: false},

			{id:3,
				img:'https://a0.muscache.com/im/pictures/02a20d6a-e9e0-40db-a96d-fb684a20aba3.jpg?aki_policy=large',
				type:'Private Room',
				rooms:6,
				title:'Casa do Castelo Fermedo,Arouca,preço quarto duplo',
				price: 60,
				rating: 3,
				reviews: 32,
				location:'Aveiro, Portugal',
				guests: 2,
				baths: 6,
				description:'Casa com Capela confortável e sossegada, com seis quartos tipo suite para descansar em ambiente acolhedor, bom para casais ou famílias com filhos que gostem da natureza, campo e montanha. O preço é por quarto duplo e por noite sendo a estadia mínima é de três noites com ou sem pequeno almoço Ideal para umas férias repousantes',
				liked: false},

			{id:4,
				img:'https://a0.muscache.com/im/pictures/b8594d8e-8a05-4fdf-9ca1-4260fcbdfb0c.jpg?aki_policy=large',
				type:'Entire Home',
				rooms:3,
				title:'Amazing sea view villa in istanbul',
				price: 643,
				rating: 4,
				reviews: 12,
				location:'Istanbul, Turkey',
				guests: 6,
				baths: 4,
				description:'Full sea view , independent  villa  with a parking for 2 cars 2 kitchen and 4 bathroom An amazing view on marmara sea with tow gardens & barbecue place for family parties All the space (Phone number hidden by Airbnb) İt will be an amazing experience Car or public transportation The villa have parking for tow cars ,and full access for public transportation any easy to reach',
				liked: false},

			{id:5,
				img:'https://a0.muscache.com/im/pictures/1daef1eb-818b-448b-9711-f88b199f8a6f.jpg?aki_policy=large',
				type:'Entire Villa',
				rooms:4,
				title:'Shangri-La by the Sea, Kapoho Beach',
				price: 650,
				rating: 4,
				reviews: 12,
				location:'Hawaii, United States',
				guests: 10,
				baths: 4,
				description:'THIS FAMOUS WATERFRONT PROPERTY has been a Vacation Rental for over 12 years. Over 70 Five Star reviews are posted on other sites, but we are new to Airbnb. The property has appeared on many television shows, been featured in international publications, and leased by world-renown celebrities. Here is a retreat with a beauty and atmosphere unmatched anywhere on the island. Voted 9th in the World by Islands Magazine! Please do not request a discount. THIS FAMOUS PROPERTY has appeared on many television shows, featured in international travel publications, and leased by world-renown celebrities. Here is a Retreat with a Beauty and Atmosphere unmatched anywhere on the island; an Irreplaceable Sanctuary to Soothe the Soul and experience Old Hawaii Living at its Best!   As SHANGRI-LA has been a popular vacation rental for over a decade, we have many repeat visitors and want every guest to have the experience of a lifetime. This is why we offer a 100% REFUND POLICY if you come to the property',
				liked: false},

			{id:6,
				img:'https://a0.muscache.com/im/pictures/d135975b-d11e-48e2-8c3e-cca5412c9602.jpg?aki_policy=large',
				type:'Entire Villa',
				rooms:1,
				title:'Contemporary Remodeled Ocean View Villa in Kapalua',
				price: 245,
				rating: 3,
				reviews: 7,
				location:'Lahaina, HI, United States',
				guests: 2,
				baths: 2,
				description:'Experience the Kapalua  lifestyle by staying at our tropical, spacious and contemporary remodeled townhouse style villa. Our romantic retreat is situated in a quiet and well appointed cul de sac at the top of The Ridge at Kapalua. Enjoy imposing direct views of both the Pacific Ocean and the internationally famous Kapalua Bay golf course. Please note these nightly rates include the 14.4% hawaii tax. What makes this condo unique from most of the condos in Kapalua and at the Ridge villas , is that this is a town house style corner unit situated on 2 floors , meaning living area , kitchen and then bedroom upstairs all share the breathtaking ocean views of Kapalua bay . We give each guest a unique key code for entry to the condo, this will be email to you a week before your arrival. I live on island and I am available for any questions regarding the condo and area There is a complimentary shuttle which can take you from the condo to destinations within Kapalua Assigned parking is to the left.',
				liked: false},

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

			{id:8,
				img:'https://a0.muscache.com/4ea/air/v2//pictures/0bc2aef8-26cb-4c01-bbd8-6fc2a5f8cdb1.jpg?t=r:w1200-h720-sfit,e:fjpg-c85',
				type:'Entire Villa',
				rooms:4,
				title:'Bungan Beach House',
				price: 2356,
				rating: 5,
				reviews: 37,
				location:'Newport, Australia',
				guests: 8,
				baths: 4,
				description:'Beach house with contemporary interior. A glass-sided pool looks out over the sea at this contemporary, light-filled villa that has been featured in lifestyle magazines. An elevator links the 4 stories, which house a 6-car garage, fitness room, cinema, and serious views throughout. Arrange for private yoga sessions or kick back in the lounge by the fireplace, bar, and alfresco shower. You have direct access to Bungan Beach below.',
				liked: false},

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
		filteredPlaces: [],
		maxRooms: 10,
		types: ['All Types', 'Entire Villa', 'Shared Villa', 'Entire House', 'Shared House', 'Private Room'],
		sortOptions: [{value:'date', option:'Latest'}, {value:'price', option:'Price'}, {value:'rating', option:'Rating'}]
	}

	searchFilter = (event) => {
		let places = this.state.places
		let input = event.target.value
		let filteredPlaces = places.filter(p => p.title.toLowerCase().includes(input.toLowerCase()) || p.location.toLowerCase().includes(input.toLowerCase()))
		this.setState({filteredPlaces: filteredPlaces})
	}

	componentWillMount() {
		this.setState({filteredPlaces: this.state.places})
	}

	render () {
		return (
			<>
			<Nav />
			<div className="filters">
				<select>
					{
						[...Array(this.state.maxRooms)].map((e,i) =>
							<option value={i+1}>Rooms: {i+1}</option>
						)
					}
				</select>
				<select>
					{
						this.state.types.map(e =>
							<option value="1">{e}</option>
						)
					}
				</select>
				<input type="number" placeholder="max price" />
				<select>
					{
						this.state.sortOptions.map(e =>
							<option value={e.value}>{e.option}</option>
						)
					}
				</select>
				<input type="text" className="search" placeholder="Search..." onKeyUp={(e) => this.searchFilter(e)}/>
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
