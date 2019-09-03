import React from 'react'
import {Link} from 'react-router-dom'

class Thumbnail extends React.Component {
	render () {
		return (
			<Link className="card link" to="/place" params={{id: this.props.place.id}}>
				<div className="image" style={{backgroundImage: 'url('+ this.props.place.img + ')'}}>
					<button className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="content">
					<small className="meta">{this.props.place.type} • {this.props.place.rooms} Rooms</small>
					<h2>{this.props.place.name}</h2>
					{
						this.props.place.booked ?
						<small className="location">
							<i className="fas fa-map-marker-alt"></i>
							<span>{this.props.place.location}</span>
						</small>
						:
						''
					}
					{
						this.props.place.booked ?
						<span className="price">{this.props.place.nights} nights • ${this.props.place.price*this.props.place.nights} Total</span>
						:
						<span className="price">${this.props.place.price}/night</span>
					}

					<span className="rating">
						{
							[...Array(this.props.place.rating)].map((e, i) => <i className="fas fa-star" key={i}></i>)
						}
						{
							[...Array(5-this.props.place.rating)].map((e, i) => <i className="far fa-star" key={i}></i>)
						}
						<span>{this.props.place.reviews} Reviews</span>
					</span>
					{
						this.props.place.booked ?
						<span className="date">{this.props.place.initialDate} - {this.props.place.finalDate}</span>
						:
						''
					}
				</div>
			</Link>
		)
	}
}

export default Thumbnail;
