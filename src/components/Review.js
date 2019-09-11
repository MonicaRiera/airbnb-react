import React from 'react'
import moment from 'moment'

class Review extends React.Component {

	state = {
		reviews: [
			{
				author: {
					name:'',
					avatar:''
				},
				rating: 0
			}
		]
	}

	UNSAFE_componentWillReceiveProps(props) {
		this.setState({
			reviews: props.reviews
		})
	}

	render () {
		return (
			<div className="reviews">
				<h2>{this.state.reviews.length} Reviews</h2>
				<form>
					<div className="group">
						<label>Leave a review</label>
						<textarea></textarea>
						<div className="rating">
							{
								[...Array(5)].map((e,i) => <i key={i} className="far fa-star"></i>)
							}
						</div>
						<button className="primary small">Submit</button>
					</div>
				</form>
				{
					this.state.reviews.map((r,i) =>
						<div key={i} className="card review">
							<div className="content">
								<div className="user">
									<div className="avatar" style={{backgroundImage : 'url(' + r.author.avatar + ')'}}></div>
									<div className="name">
										<small>{moment(r.date).format('D MMM YYYY')}</small>
										<span>{r.author.name}</span>
									</div>
								</div>
								<div className="rating">
								{
									[...Array(r.rating)].map((e,i) => <i key={i} className="fas fa-star"></i>)
								}
								{
									[...Array(5-r.rating)].map((e,i) => <i key={i} className="far fa-star"></i>)
								}
								</div>
								<p>{r.content}</p>
							</div>
						</div>
					)
				}
			</div>
		)
	}
}

export default Review;
