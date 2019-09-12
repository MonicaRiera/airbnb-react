import React from 'react'
import Review from './Review'
import Gallery from './Gallery'
import Nav from './Nav'
import axios from 'axios'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

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

		form: {
			startDate: '',
			finalDate: '',
			guests: 1
		}

	}

	UNSAFE_componentWillMount() {
		let place = this.props.match.params.id
		axios.get(`http://localhost:4000/places/${place}`)
		.then(res => {
			this.setState({place: res.data})
		})
		.catch(err => console.log(err))
	}

	changeField = (e, field) => {
		let form = this.state.form
		if (field === 'guests') {
			form[field] = e.target.value
		} else {
			form[field] = e
		}
		this.setState({form})
	}

	sendForm = event => {
		this.props.history.push({
			pathname: '/confirm',
			form: this.state.form,
			place: this.state.place
		})
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
								<form className="small" onSubmit={e => this.sendForm(e)}>
									<div className="group">
										<label>Dates</label>
										<DatePicker placeholderText="Check-in" selected={this.state.form.startDate} onChange={(e) => this.changeField(e, 'startDate')} dateFormat="dd/MM/yyyy"/>
										<DatePicker placeholderText="Check-out" selected={this.state.form.finalDate} onChange={(e) => this.changeField(e, 'finalDate')} dateFormat="dd/MM/yyyy"/>
									</div>
									<div className="group">
										<label>Guests</label>
										<select onChange={(e) => this.changeField(e, 'guests')}>
											{
												[...Array(this.state.place.guests)].map((e,i) => <option key={i} value={i+1}>{i+1} guests</option>)
											}
										</select>
									</div>
									<div className="group">
										<button type="submit" disabled={
												!this.state.form.startDate || !this.state.form.finalDate
											} className="secondary full">Book this place</button>
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
