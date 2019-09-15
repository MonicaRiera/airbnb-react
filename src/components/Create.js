import React from 'react'
import Nav from './Nav'
import Sidebar from './Sidebar'
import axios from 'axios'

class Create extends React.Component {

	state = {
		formFields: [
			{label:'Title', type:'text'},
			{label:'Description', type:'textarea'},
			{label:'Coty or Town', type:'text'},
			{label:'Country', type:'text'},
			{label:'Price per Night (USD)', type:'number'},
			{label:'Type', type:'select',
				options: ['Entire Villa', 'Entire House', 'Entire Apartment', 'Private Room', 'Shared Villa', 'Shared House', 'Shared Apartment']},
			{label:'Number of Rooms', type:'number'},
			{label:'Number of Bathrooms', type:'number'},
			{label:'Maximum number of Guests', type:'number'},
			{label:'Upload Photos', type:'file'},
			{label:'Amenities', type:'checkbox', options: ['Swimming Pool', 'Kitchen', 'Wi-Fi', 'TV', 'Gym', 'Iron', 'Air Conditioning']}
		],
		user: {
			name: '',
			avatar:''
		}
	}

	UNSAFE_componentWillMount() {
		let token = localStorage.getItem('token')
		axios.get(`http://localhost:4000/auth?token=${token}`)
		.then(res => {
			this.setState({
				user: res.data
			})
		})
	}

	render () {
		return (
			<>
			<Nav user={this.state.user}/>
			<div className="grid medium">
				<div className="grid sidebar-left">
					<Sidebar />
					<div className="content">
						<h2>Host a new place</h2>
						<form>
							{
								this.state.formFields.map(e =>
									<div className="group">
									<label>{e.label}</label>
									{
										e.type === 'textarea' ?
										<textarea></textarea> : ''
									}
									{
										e.type === 'select' ?
										<select>
											{
												e.options.map(o => <option>{o}</option>)
											}
										</select> : ''
									}
									{
										e.type === 'file' ?
										<input type={e.type} multiple/> : ''
									}
									{
										e.type === 'checkbox' ?
											e.options.map(o =>
												<label className="checkbox">
													<input type="checkbox"/> {o}
												</label>)
										 : ''
									}
									{
										e.type === 'text' || e.type === 'number' ?
										<input type={e.type}/> : ''
									}
									</div>
								)
							}
							<button className="primary">Publish this Place</button>
							<button className="cancel"><i className="fas fa-times"></i></button>
						</form>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default Create;
