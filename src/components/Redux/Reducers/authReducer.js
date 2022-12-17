const intialState={
name:"",
isLogged:false
};

const authReducer=(state=intialState,action)=>{
 switch(action.type){
   default:
    return{
        ... state
    }

 }

}
export default authReducer;