import {gql} from 'apollo-boost';


const getDevelopersQuery = gql`
	{
		developers{
			name
			id
		}
	}
`

const getGamesQuery = gql`
	{
		games{
			title
			genre
			id
		}
	}
`

const addGameMutation = gql`
 mutation($title:String!,$genre:String!,$developerId:ID!){
	 addGame(title:$title, genre:$genre, developerId:$developerId){
		 title
		 id
	 }
 }
`

const getGameQuery = gql`
	query($id: ID){
		game(id: $id){
			id
			title
			genre
			developer {
				id
				name
				location
				games{
					title
					id
				}
			}
		}
	}
`
export {
	getDevelopersQuery,
	getGamesQuery,
	getGameQuery,
	addGameMutation
};
