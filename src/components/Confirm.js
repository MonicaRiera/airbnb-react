import React from 'react'
import Nav from './Nav'
import Thumbnail from './Thumbnail'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'

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
		nights: '',
		total: 0
	}

	// componentWillMount() {
	// 	axios.get('http://localhost:4000/places/5d71f584ee4204aa748de72d')
	// 	.then(res => {
	// 		this.setState({place: res.data})
	// 	})
	// }
	//
	// UNSAFE_componentWillReceiveProps(props) {
	// 	this.setState({
	// 		place: props.location.place,
	// 		form: props.location.form
	// 	}).then()
	// }

	componentDidMount() {
		let place = this.state.place
		let form = this.state.form
		let nights = this.state.nights
		let total = this.state.total


		if (this.props.location.form) {
			place = this.props.location.place
			form = this.props.location.form
			let startDate = moment(form.startDate)
			let finalDate = moment(form.finalDate)
			nights = Number(finalDate.diff(startDate, 'days'))+1
			total = place.price * nights * form.guests
		}

		this.setState({
			place: place,
			form: form,
			nights: nights,
			total: total
		})
	}

	handleChangeStart = date => {
		let form = this.state.form
		form.startDate = date
		this.setState({form})
	}

	handleChangeFinal = date => {
		let form = this.state.form
		form.finalDate = date
		this.setState({form})
	}

	setGuests = e => {
		let form = this.state.form
		form.guests = e.target.value
		this.setState({form})
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
								<DatePicker placeholderText={this.state.form.startDate} selected={this.state.form.startDate} className="start" onChange={this.handleChangeStart} dateFormat="dd/MM/yyyy"/>
							</div>
							<div className="group">
								<label>To</label>
								<DatePicker placeholderText={this.state.form.finalDate} selected={this.state.form.finalDate} className="final" onChange={this.handleChangeFinal} dateFormat="dd/MM/yyyy"/>
							</div>
							<div className="group">
								<label>Guests</label>
								<select>
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
