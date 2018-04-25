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
export {
	getDevelopersQuery,
	getGamesQuery,
	addGameMutation
};
