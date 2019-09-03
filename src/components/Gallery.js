import React from 'react'

class Gallery extends React.Component {
	state = {
		images: [
			{image: 'https://q-ak.bstatic.com/images/hotel/max1024x768/186/186223203.jpg', selected: true},
			{image: 'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223171.jpg', selected: false},
			{image: 'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223174.jpg', selected: false},
			{image: 'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223178.jpg', selected: false},
			{image: 'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223180.jpg', selected: false},
			{image: 'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223186.jpg', selected: false},
			{image: 'https://r-ak.bstatic.com/images/hotel/max1280x900/186/186223190.jpg', selected: false},
			{image: 'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223195.jpg', selected: false},
			{image: 'https://q-ak.bstatic.com/images/hotel/max1280x900/186/186223199.jpg', selected: false}
		],
		mainImage: ''
	}

	changeImage = (index) => {
		console.log('click')
		let img = this.state.mainImage
		let images = this.state.images
		img = images[index].image
		images.forEach((e, i) => {
			i === index ? e.selected = true : e.selected = false
		})
		this.setState({
			mainImage: img,
			images: images
		})
	}

	componentWillMount() {
		this.setState({mainImage: this.state.images[0].image})
	}

	render () {
		return (
			<div className="gallery">
				<div className="image-main" style={{backgroundImage : 'url(' + this.state.mainImage + ')'}}>
					<button className="icon">
						<i className="far fa-heart"></i>
					</button>
				</div>
				<div className="thumbnails">
				{
					this.state.images.map((e,i) =>
					<div onClick={() => this.changeImage(i)} key={i} className={this.state.images[i].selected ? 'thumbnail selected' : 'thumbnail'} style={{backgroundImage : 'url(' + this.state.images[i].image + ')'}}></div>
				)
				}
				</div>
			</div>
		)
	}
}

export default Gallery;
