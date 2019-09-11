import React from 'react'

class Gallery extends React.Component {
	state = {
		images: [],
		mainImage: ''
	}

	changeImage = (index) => {
		let img = this.state.mainImage
		let images = this.state.images
		img = images[index]
		this.setState({
			mainImage: img
		})
	}

	UNSAFE_componentWillReceiveProps(props) {
		this.setState({
			images: props.images,
			mainImage: props.images[0]
		})
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
					<div onClick={() => this.changeImage(i)} key={i}  className={this.state.images[i] === this.state.mainImage ? 'thumbnail selected' : 'thumbnail'} style={{backgroundImage : 'url(' + e + ')'}}></div>
				)
				}
				</div>
			</div>
		)
	}
}

export default Gallery;
