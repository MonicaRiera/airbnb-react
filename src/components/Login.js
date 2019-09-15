import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Login extends React.Component {
	state = {
		user: {
			email: '',
			password: ''
		},
		credentials: true
	}

	login = (e) => {
		e.preventDefault()
		axios.post('http://localhost:4000/login', this.state.user)
		.then(res => {
			let token = res.data.token
			if (token) {
				console.log(token);	
				localStorage.setItem('token', token)
				this.props.history.push({
					pathname: '/places'
				})
			} else {
				this.setState({credentials: false})
			}

		})
		.catch(err => {
			console.log(err)
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
					<form onSubmit={this.login}>
						<div className="group">
							<label>Email</label>
							<input required onChange={(e) => this.changeField(e, 'email')} type="email"/>
						</div>
						<div className="group">
							<label>Password</label>
							<input required onChange={(e) => this.changeField(e, 'password')} type="password"/>
						</div>
						{
							this.state.credentials ? '' : <p style={{color: 'red'}}>Wrong credentials</p>
						}
						<button className="primary">Login</button>
					</form>
					<p className="footer">
						New to Airbnb? <Link to="/signup">Signup</Link>
					</p>
				</div>
			</div>
		</div>
		)
	}
}

export default Login;
