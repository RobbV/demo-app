import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getGamesQuery} from '../queries/queries';

class Games extends Component {
	renderGames(){
		let data = this.props.data

		if(data.loading) {
			return <div>loading games....</div>
		}else{
			return data.games.map(game => {
				return(
					<li key={game.id}>{game.title}</li>
				)
			});
		}
	}
  render() {
    return (
      <div id="games">
			<ul>
				{this.renderGames()}
			</ul>

      </div>
    );
  }
}

export default graphql(getGamesQuery)(Games);
