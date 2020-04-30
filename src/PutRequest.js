import React from 'react';
class RestController extends React.Component {
	constructor(props) {
		super(props);
		this.state = {user: []};
	}

	buttonPut() {
		fetch('https://testingbucketput.s3.amazonaws.com/pictures.json', {
			method: 'PUT',
			body: JSON.stringify({
				id: 50,
        description: 'Test',
        image: "https://google.com"

			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
						return response.json()
		}).then(json => {
			console.log(json)
			this.setState({
				user:json
			});
		})
	}
	render() {
		return (
			<div>
				<p><b>Resource updated in the server as shown below</b></p>
				<p>Id : {this.state.user.id}</p>
				<p>Title : {this.state.user.title}</p>
				<p>Body : {this.state.user.body}</p>
				<p>UserId : {this.state.user.userId}</p>
        <button onClick = {this.buttonPut}>Click this</button>
			</div>
		)
	}
}
export default RestController;
