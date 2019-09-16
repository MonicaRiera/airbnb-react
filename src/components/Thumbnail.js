import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Thumbnail extends React.Component {
	state = {
		place: this.props.place,
		reviews: []
	}

	updateLikes = (e) => {
		e.preventDefault()
		let token = localStorage.getItem('token')
		axios.patch(`${process.env.REACT_APP_API}/users?token=${token}`, {place: this.state.place._id})
		.then(res => {
			console.log('done');
		})
		.catch(err => {
			console.log(err)
		})
	}

	UNSAFE_componentWillReceiveProps(props) {
		this.setState({place: props.place})
	}

	UNSAFE_componentWillMount() {
		if (this.props.place.reviews) {
			this.setState({reviews: this.props.place.reviews})
		}
	}
	render () {
		return (
			<Link className="card link" to={`/place/${this.state.place._id}`}>
				<div className="image" style={{backgroundImage: 'url('+ this.state.place.img + ')'}}>
					<button onClick={this.updateLikes} className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">{this.state.place.type.name} • {this.state.place.bedrooms} Rooms</small>
					<h2>{this.state.place.title}</h2>
					{
						this.state.place.booked ?
						<small className="location">
							<i className="fas fa-map-marker-alt"></i>
							<span>{this.state.place.city}, {this.state.place.country}</span>
						</small>
						:
						''
					}
					{
						this.state.place.booked ?
						<span className="price">{this.state.place.nights} nights • ${this.state.place.price*this.state.place.nights} Total</span>
						:
						<span className="price">${this.state.place.price}/night</span>
					}

					<span className="rating">
						{
							[...Array(this.state.place.rating)].map((e, i) => <i className="fas fa-star" key={i}></i>)
						}
						{
							[...Array(5-this.state.place.rating)].map((e, i) => <i className="far fa-star" key={i}></i>)
						}
						<span>{this.state.reviews} Reviews</span>
					</span>
					{
						this.state.place.booked ?
						<span className="date">{this.state.place.initialDate} - {this.state.place.finalDate}</span>
						:
						''
					}
				</div>
			</Link>
		)
	}
}

export default Thumbnail;
