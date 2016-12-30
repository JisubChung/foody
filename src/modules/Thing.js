import React from 'react'

class Thing extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		console.log(this); // React Component instance
	}
	render() {
		return (
			<div onMouseOver={this.handleClick}>Yes</div>
		);
	}
}

export default Thing;