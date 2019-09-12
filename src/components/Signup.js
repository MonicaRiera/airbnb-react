import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class Signup extends React.Component {
	state = {
		formFields: [
			{label:'Name', type:'text', value:'name'},
			{label:'Email', type:'email', value:'email'},
			{label:'Password', type:'password', value:'password'},
			{label:'Location', type:'text', value:'location'},
			{label:'Profile Picture', type:'file', value:'avatar'}
		],

		user: {
			name: '',
			email: '',
			password: '',
			location: '',
			avatar: ''
		}
	}

	signup = (e) => {
		e.preventDefault()
		axios.post('http://localhost:4000/signup', this.state.user)
		.then(res => {
			localStorage.setItem('token', res.data.token)
			console.log(res.data.token);
		})
		.catch(err => {
			console.log(err)
		})
		this.props.history.push({
			pathname: '/places'
		})
	}

	changeField = (e, field) => {
		let user = this.state.user
		user[field] = e.target.value
		this.setState({user})
	}

	render () {
		return (
			<div className="grid center middle tall image">
			<div className="card small">
				<div className="content">
					<div className="logo"></div>
					<form onSubmit={this.signup}>
						{
							this.state.formFields.map((e,i) =>
								<div key={i} className="group">
									<label>{e.label}</label>
									<input
										value={this.state.user[e.value]}
										required={
											e.value === 'avatar'? false : !this.state.user[e.value]
										}
										onChange={(event) => this.changeField(event, e.value)}
										type={e.type}/>
								</div>
							)
						}
						<button className="primary">Signup</button>
					</form>
					<p className="footer">
						Already have an account? <Link to="/Login">Login</Link>
					</p>
				</div>
			</div>
		</div>
		)
	}
}

export default Signup;
