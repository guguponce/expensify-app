import gastosReducer from "../reducers/gastos";
import { v4 as uuidv4 } from 'uuid';

const defaultState = [
  {
    id: 1,
    name: "agua",
    createdAt: -400000000,
    description: "",
    amount: 100
  },
  {
    id: 2,
    name: "gas",
    createdAt: 400000000,
    description: "22",
    amount: 100
  }
]
test("should return default state", ()=>{
  const state = gastosReducer(defaultState, { type: "@@INIT"})
  expect(state).toEqual(defaultState)
})

test("should return the default state with the new gasto", ()=>{
  const newGasto = {id: 3,
                    name: "luz",
                    description: "pola",
                    amount: 300,
                    createdAt:0
                    }
  const stateModified = gastosReducer(defaultState, {type:"ADD_GASTO", payload: newGasto})
  expect(stateModified).toEqual([...defaultState, newGasto])
})

test("should return the default state with one gasto less", ()=>{
  const stateModified = gastosReducer(defaultState, {type:"REMOVE_GASTO", id: 1})
  expect(stateModified).toEqual([defaultState[1]])
})
test("should return the default state", ()=>{
  const stateModified = gastosReducer(defaultState, {type:"REMOVE_GASTO", id: 3})
  expect(stateModified).toEqual([...defaultState])
})


test("should return the default state with an edited gasto", ()=>{
  const newGasto = {
                    name: "luz",
                    description: "pola",
                    amount: 300,
                    createdAt:0
                    }
  const stateModified = gastosReducer(defaultState, {type:"EDIT_GASTO", id: 2, payload: newGasto})
  expect(stateModified).toEqual([defaultState[0], {...newGasto, id:2}])
})

test("should return the default state", ()=>{
  const newGasto = {
                    name: "luz",
                    description: "pola",
                    amount: 300,
                    createdAt:0
                    }
  const stateModified = gastosReducer(defaultState, {type:"EDIT_GASTO", id: 3, payload: newGasto})
  expect(stateModified).toEqual([...defaultState])
})
