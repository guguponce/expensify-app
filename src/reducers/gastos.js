// import { v4 as uuidv4 } from 'uuid';

const gastosReducerDefaultState = []
export default (state=gastosReducerDefaultState, action)=>{
  switch (action.type){
    case "ADD_GASTO":
      return [...state, action.payload];
    case "REMOVE_GASTO":
      return state.filter(item=> item.id !== action.id);
    case "EDIT_GASTO":
      return state.map((item,index)=>{
        if(item.id==action.id){
          const editedGasto = {
            id: action.id,
            ...action.payload}
          return editedGasto
        }else{
          return item
        }
      });
    default:
      return state;
  }
}
