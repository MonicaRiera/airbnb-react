import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'

class StripeForm extends React.Component {

	state = {
		successfulPayment: false,
		failPayment: false
	}

	getToken = () => {
		this.props.stripe.createToken({name: this.props.client}).then(res => {
			axios.post(`${process.env.REACT_APP_API}/pay`, {
				token: res.token.id,
				amount: this.props.amount,
				description: this.props.description
			})
			.then(data => {
				if (data.status === 200) {
					let successfulPayment = this.state.successfulPayment
					let failPayment = this.state.failPayment
					failPayment = false
					successfulPayment = true
					this.setState({
						successfulPayment: successfulPayment,
						failPayment: failPayment
					})
					setTimeout(() => {this.props.changePaymentCardState()}, 2000)
				} else {
					let failPayment = this.state.failPayment
					failPayment = true
					this.setState({failPayment})
				}
			})
		})
		.catch(err => {
			let failPayment = this.state.failPayment
			failPayment = true
			this.setState({failPayment})
		})
	}

	render() {
		return (
			<>
				<CardElement />
				<button className='primary' onClick={this.getToken}>Pay</button>
				{
					this.state.successfulPayment ?
					<p>Payment successful, thank you!</p> : ''
				}
				{
					this.state.failPayment ?
					<p>Something went wrong, please try again</p> : ''
				}
			</>
		)
	}
}

export default injectStripe(StripeForm)
