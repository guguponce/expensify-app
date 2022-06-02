import { v4 as uuidv4 } from 'uuid';

// ACTIONS CREATORS
export const addGasto = (
  {
    name = "",
    description = "",
    amount = 100,
    createdAt = 0
  }={})=>({
    type: "ADD_GASTO",
    payload: {
      id: uuidv4(),
      name,
      description,
      amount,
      createdAt
    }
  })

  export const removeGasto=(id)=>({
      type: "REMOVE_GASTO",
      id
  })

  export const editGasto=(id,payload)=>({
      type: "EDIT_GASTO",
      id,
      payload
    })
