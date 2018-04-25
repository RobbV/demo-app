import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getGamesQuery} from '../queries/queries';
//components
import GameInfo from './gameInfo';

class Games extends Component {
	constructor(props){
		super(props);
			this.state = {
				selected: null
		}
	}
	renderGames(){
		let data = this.props.data

		if(data.loading) {
			return <tr><td>loading games...</td></tr>
		}else{
			return data.games.map(game => {
				return(
					<tr key={game.id}><td key={game.id} onClick={(event) => {this.setState({selected:game.id})}}>{game.title}</td></tr>
				)
			});
		}
	}
  render() {
    return (
      <div id="games">
			<table className="table table-hover table-striped table-dark">
				<tbody>
					{this.renderGames()}
				</tbody>
			</table>
				<GameInfo gameId={this.state.selected}/>
      </div>
    );
  }
}

export default graphql(getGamesQuery)(Games);
