import React from 'react'
import {CardElement, injectStripe} from 'react-stripe-elements'
import axios from 'axios'

class StripeForm extends React.Component {

	getToken = () => {
	this.props.stripe.createToken({}).then(res => {
		//console.log(res.token.id)
		axios.post(`${process.env.REACT_APP_API}/pay`, {
			token: res.token.id,
			amount: this.props.amount,
			description: this.props.description
		})
	})
}


	render() {
		return (
			<>
				<CardElement />
				<button className='primary' onClick={this.getToken}>Pay</button>
			</>
		)
	}

}

export default injectStripe(StripeForm)
