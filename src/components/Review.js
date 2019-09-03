import React from 'react'

class Review extends React.Component {

	state = {
		reviews: [
			{profileImg:'https://randomuser.me/api/portraits/women/3.jpg', date:'27 July 2019', name:'Amanda', rate:5, comment:'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.'},
			{profileImg:'https://randomuser.me/api/portraits/men/4.jpg', date:'22 July 2019', name:'John', rate:3, comment:'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.'},
			{profileImg:'https://randomuser.me/api/portraits/men/5.jpg', date:'4 July 2019', name:'Sam', rate:4, comment:'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.'},
			{profileImg:'https://randomuser.me/api/portraits/women/7.jpg', date:'27 May 2019', name:'Ella', rate:5, comment:'It was beyond my imagination that my AirBnB experience could be better than a 5 star resort hotel. It is one of the most beautiful villa that I have had stayed so far in the many countries travelled so far. The pictures have not sufficiently described the details of the place.'}
	]
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
							<i className="far fa-star"></i>
							<i className="far fa-star"></i>
							<i className="far fa-star"></i>
							<i className="far fa-star"></i>
							<i className="far fa-star"></i>
						</div>
						<button className="primary small">Submit</button>
					</div>
				</form>
				{
					this.state.reviews.map((r,i) =>
						<div key={i} className="card review">
							<div className="content">
								<div className="user">
									<div className="avatar" style={{backgroundImage : 'url(' + r.profileImg + ')'}}></div>
									<div className="name">
										<small>{r.date}</small>
										<span>{r.name}</span>
									</div>
								</div>
								<div className="rating">
								{
									[...Array(r.rate)].map(e => <i className="fas fa-star"></i>)
								}
								{
									[...Array(5-r.rate)].map(e => <i className="far fa-star"></i>)
								}
								</div>
								<p>{r.comment}</p>
							</div>
						</div>
					)
				}

			</div>
		)
	}
}

export default Review;
