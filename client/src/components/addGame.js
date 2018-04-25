import React, { Component } from 'react';
import {graphql, compose} from 'react-apollo';
import {getDevelopersQuery, addGameMutation, getGamesQuery} from '../queries/queries';

class AddGame extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			genre: '',
			developerId: ''
		};
	}
	renderDevelopers(){
		let data = this.props.getDevelopersQuery;
		if(data.loading){
			return <option disabled>Loading...</option>
		} else {
			return data.developers.map(developer => {
				return( <option key={developer.id} value={developer.id}>{developer.name}</option>)
			});
		}
	}
	submitForm(event){
		console.log(this.state.title);
		console.log(this.state.genre);
		console.log(this.state.developerId);
		event.preventDefault();
		this.props.addGameMutation({
			variables: {
				title: this.state.title,
				genre: this.state.genre,
				developerId: this.state.developerId
			},
			refetchQueries: [{ query: getGamesQuery}]
		})
	}

  render() {
    return (
      <div id="addgame">
			<div id="popup1" className="overlay">
			<div id="popup">
				<h2>Add a New Game</h2>
				<a id="close" href="#close">×</a>
				<div id="content">
				<form id="addgame" onSubmit={this.submitForm.bind(this)} >
						<label >Game Title</label>
						<input type="text" name="title" onChange={ (event) => this.setState({title: event.target.value})} placeholder="Enter Game Title" />

						<label >Enter Genre</label>
						<input type="text" name="genre" onChange={ (event) => this.setState({genre: event.target.value})} placeholder="Enter Genre" />

						<label >select a game developer</label>
						<select  name="developer" onChange={ (event) => this.setState({developerId: event.target.value})}>
							<option value="null">Select a Developer...</option>
							{this.renderDevelopers()}
						</select>
						<button type="submit">Add Game</button>
				</form>
				</div>
			</div>
		</div>
      </div>
    );
  }
}

export default compose(
		graphql(getDevelopersQuery, {name: "getDevelopersQuery"}),
		graphql(addGameMutation, {name: "addGameMutation"})
)(AddGame);
