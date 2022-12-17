const intialState={
  popularGames:[],
  newGames:[],
  upcomingGames:[],
  searchGames:[]
};
const gamesReducer=(state=intialState,action)=>{

  switch(action.type){

    case 'Fetch_Games':
         return{
          ... state,
            popularGames:action.payload
       
         }

    case 'newGames':
        return{
        ...state,
        newGames:action.payload
        }     
        
    case 'upcomingGames':
      return{
        ...state,
        upcomingGames:action.payload
      }   
     default:
        return{
            ... state
         }
  }

}
export default gamesReducer