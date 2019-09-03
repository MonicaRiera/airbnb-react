import React from 'react'
import {Link} from 'react-router-dom'


class Signup extends React.Component {
	state = {
		formFields: [
			{label:'Name', type:'text'},
			{label:'Email', type:'email'},
			{label:'Password', type:'password'},
			{label:'Location', type:'text'},
			{label:'Profile Picture', type:'file'}
		]
	}

	render () {
		return (
			<div className="grid center middle tall image">
			<div className="card small">
				<div className="content">
					<div className="logo"></div>
					<form>
						{
							this.state.formFields.map(e =>
								<div className="group">
									<label>{e.label}</label>
									<input type={e.type}/>
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
