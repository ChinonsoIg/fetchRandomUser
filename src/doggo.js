import React, { Component } from "react";

// 	const doggo = document.getElementById("doggo");

// 	promise
// 		.then(response => response.json())
// 		.then(function (data) {
// 			const img = document.createElement("img");
// 			img.src = data.message;
// 			img.alt = "Cute doggo";
// 			doggo.appendChild(img);
// 		});
// }

class FetchDog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoad: false,
			items: [],
			img: {}
		}
		// this.handleClick = this.handleClick.bind(this);
	}
	// https://dog.ceo/api/breeds/list/all
	
	// handleClick() {
	componentDidMount() {
		fetch("https://randomuser.me/api/")
			.then(res => res.json())
			.then(
				(result) => {
					this.setState({
						isLoad: true,
						items: result.results[0].name,
						img: result.results[0].picture
					});
				},
				(error) => {
					this.setState({
						isLoad: true,
						error
					});
				}
			)
	}
	// document.querySelector("add-doggo").addEventListener("click", componentDidMount)

	render() {
		const { error, isLoad, items, img } = this.state;
		if (error) {
			return <div>Errorr: {error.message}</div>;
		} else if (!isLoad) {
			return <div className="name">Loading...</div>
		} else {
			return (
				<div className="doggo">
					<div className="name">
						<h2>{items.title + ' ' + items.first + ' ' + items.last}</h2>
					</div>
					<div className="image">
						<img src={img.large} />
					</div>					
				</div>				
			);
		}
	}
}

export default FetchDog;
