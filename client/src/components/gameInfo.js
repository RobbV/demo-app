import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import {getGameQuery} from '../queries/queries';

class GameInfo extends Component {
	renderGameInfo(){
		const {game} = this.props.data;
		if(game){
			return (
				<div className="animated fadeInRight ">
					<h4> {game.title} Informantion: </h4>
					<p> Genre: {game.genre} </p>
					<p> Developer: {game.developer.name} </p>
					<h6> Other games by the same developer: </h6>
					<ul>
					{game.developer.games.map(item => {
						return <li key={item.id}>{item.title}</li>
					})}
					</ul>
				</div>
			)
			} else {
				return(<div></div>)
			}
		}
  render(){
    return (
      <div id="gameinfo">
				{this.renderGameInfo()}
      </div>
    )
  }
}

export default graphql(getGameQuery, {
	options: (props) => {
		return{
			variables: {
				id: props.gameId
			}
		}
	}
})(GameInfo);
