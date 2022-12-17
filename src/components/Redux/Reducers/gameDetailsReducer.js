const intialState={

gamedetails:{platforms:[]},//objects of array because store previous data
screenshots:{results:[]},
isLoading:true
}
const gameDetailsReducer=(state=intialState,action)=>{
  switch(action.type){
    case 'gameDetailsandSS':
        return{
            ...state,
            gamedetails:action.payload.details,
            screenshots:action.payload.screen,
            isLoading:false
        }
   case 'Loading':
     return{
      ...state,
      isLoading:true
     }
     default:
        return{
            ...state
        }   
  }
} 
export default gameDetailsReducer