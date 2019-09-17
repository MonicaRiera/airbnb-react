import React from 'react'
import Nav from './Nav'
import Thumbnail from './Thumbnail'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import moment from 'moment'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import StripeForm from './StripeForm'
import {Elements, StripeProvider} from 'react-stripe-elements'

class Confirm extends React.Component {
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
			guests: 0
		},
		nights: 0,
		total: 0,
		user: {
			name:'',
			avatar:'',
			likes: [],
			email: ''
		},
		paymentCard: false
	}

	componentDidMount() {

		let token = localStorage.getItem('token')
		axios.get(`${process.env.REACT_APP_API}/auth?token=${token}`)
		.then(res => {
			this.setState({
				user: res.data
			})
		})

		let place = this.state.place
		let form = this.state.form
		let nights = this.state.nights
		let total = this.state.total

		if (this.props.location.form) {
			place = this.props.location.place
			form = this.props.location.form
			let startDate = moment(form.startDate)
			let finalDate = moment(form.finalDate)
			nights = finalDate.diff(startDate, 'days')
			total = place.price * nights * form.guests
		}

		this.setState({
			place: place,
			form: form,
			nights: nights,
			total: total
		})
	}

	changeField = (e, field) => {
		let form = this.state.form
		if (field === 'guests') {
			form[field] = e.target.value
		} else {
			form[field] = e
		}
		this.setState({form})
		this.recalculate()
	}

	recalculate = () => {
		let form = this.state.form
		let nights = this.state.nights
		let total = this.state.total

		let startDate = moment(form.startDate)
		let finalDate = moment(form.finalDate)
		nights = finalDate.diff(startDate, 'days')
		total = this.state.place.price * nights * form.guests

		this.setState({
			nights: nights,
			total: total
		})

	}

	goBack = () => {
		this.props.history.goBack()
	}

	showPaymentCard = (e) => {
		e.preventDefault()
		let paymentCard = this.state.paymentCard
		paymentCard = true
		this.setState({paymentCard})
	}

	hidePaymentCard = () => {
		let paymentCard = this.state.paymentCard
		paymentCard = false
		this.setState({paymentCard})
	}

	render () {
		return (
			<>
			<Nav user={this.state.user}/>
			<div className="grid medium">
				<div className="grid sidebar-left">
					<div className="sidebar">
						<Thumbnail place={this.state.place} user={this.state.user}/>
					</div>
					<div className="content">
						<h2>Confirm Booking</h2>
						<form>
							<div className="group">
								<label>From</label>
								<DatePicker placeholderText={this.state.form.startDate} selected={this.state.form.startDate} className="start" onChange={(e) => this.changeField(e, 'startDate')} dateFormat="dd/MM/yyyy"/>
							</div>
							<div className="group">
								<label>To</label>
								<DatePicker placeholderText={this.state.form.finalDate} selected={this.state.form.finalDate} className="final" onChange={(e) => this.changeField(e, 'finalDate')} dateFormat="dd/MM/yyyy"/>
							</div>
							<div className="group">
								<label>Guests</label>
								<select onChange={(e) => this.changeField(e, 'guests')}>
									{
										[...Array(this.state.place.guests)].map((e,i) => {
											return e === this.state.form.guests ? <option selected key={i} value={i+1}>{i+1} guests</option> : <option key={i} value={i+1}>{i+1} guests</option>
										})
									}
								</select>
							</div>
							<div className="group">
								<label>Total: {this.state.nights} nights</label>
								<h2>${this.state.total}</h2>
							</div>
							<button className="primary" onClick={this.showPaymentCard}>Confirm</button>
						</form>
						<hr/>
						<button onClick={this.goBack}>Cancel</button>
					</div>
				</div>
			</div>
			{
				this.state.paymentCard ?
				<StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
					<div className='stripe-form'>
						<Elements>
							<StripeForm amount={this.state.total} description={this.state.place.title} changePaymentCardState={this.hidePaymentCard} client={this.state.user.email}/>
						</Elements>
					</div>
				</StripeProvider> : ''
			}
			</>
		)

	}
}

export default withRouter(Confirm);
