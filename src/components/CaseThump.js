import React, { Component } from 'react'

export class CaseThump extends Component {
	getStyle = (image) => ({
		color: "white",
		backgroundImage: `url(${image})`
	})

	hide = () => ({
		opacity: 0,
		pointerEvents:"none",
		display: "none",
	})

    render() {
		let {title, desc, image, tag} = this.props._case;
		console.log(this.props.i)
		return (
			<div className="card" onClick={this.props.chooseCard.bind(this, this.props.i)} style={this.props.hidden ? this.hide() : null}>
				{/* <div className="bg" style={this.getStyle(image)}></div> */}
				<img className="bg" src={image}></img>
				<h2>{title}</h2>
				{this.props.children}
				<p>{desc}</p>
				<div className="tag">
					{tag}
				</div>
			</div>
        )
    }
}

export default CaseThump
