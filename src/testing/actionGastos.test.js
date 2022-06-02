import { addGasto, removeGasto, editGasto } from '../actions/gastos';
import { v4 as uuidv4 } from 'uuid';


test("should return the correct action object from remove gasto",()=>{
  const remover = removeGasto("asdf")
  expect(remover).toEqual({
      type: "REMOVE_GASTO",
      id: "asdf"
  })
})

//
test("should return the correct action object from add gasto",()=>{
  const dataGasto ={
    name: "gas",
    "amount": 100,
    description: "none",
    createdAt: 20}
  const add = addGasto(dataGasto)
  expect(add).toEqual({
      type: "ADD_GASTO",
      payload: {
        id: expect.any(String),
        ...dataGasto
      }
  })
})

test("should return the correct action object from add gasto",()=>{
  const edit = editGasto(2000,{name: "electricidad", description: "",})
  expect(edit).toEqual({
      type: "EDIT_GASTO",
      id: 2000,
      payload: {
        name: "electricidad",
        description: ""
      }
  })
})

test("should return default added object",()=>{
  const dataGasto={
    name: "",
    description: "",
    amount: 100,
    createdAt: 0
  }
  const addEmpty = addGasto()
  expect(addEmpty).toEqual({
    type: "ADD_GASTO",
    payload: {
    ...dataGasto,
    id: expect.any(String)
  }
})
})
