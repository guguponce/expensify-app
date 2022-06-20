import { v4 as uuidv4 } from 'uuid';
import { app, dbRef, db } from "../firebase/firebase"
import { getAuth } from "firebase/auth";
import { push, off, onValue, remove, update, getDatabase, ref, set, get, child } from "firebase/database";
// ACTIONS CREATORS


export const addGasto = (gastoDispatched)=>({
    type: "ADD_GASTO",
    payload: {...gastoDispatched}
  })

export const startAddGasto = (submittedGasto = {}) => {
      return (dispatch, getState)=>{
        const auth = getAuth()
        const userId = getState(auth).auth.uid;
        const referencia = ref(db, `users/${userId}/gastos`)
        const {
        name = "",
        description = "",
        amount = 100,
        createdAt = 0
      } = submittedGasto; //extraer datos de submittedgasto
      const gasto = { name, description, amount, createdAt } //armar nuevo objeto
      // push(ref(db,"gastos"), gasto)
      return push(referencia, {...gasto}).then((ref) => {//agregar a firebase
        dispatch(addGasto({ //dispatch action
          id: ref.key,  //obtener id de firebase
          ...gasto
        }))
      })
      }
  }

  export const removeGasto=(id)=>({
      type: "REMOVE_GASTO",
      id
  })

  export const startRemoveGasto=(id=>{
    return (dispatch, getState)=>{
      const auth = getAuth()
      const userId = getState(auth).auth.uid;
      const referencia = ref(db, `users/${userId}/gastos`)
      return remove(child(referencia, id))
        .then(()=>{
          dispatch(removeGasto(id))
        })
    }
  })

  export const editGasto=(id,payload)=>({
      type: "EDIT_GASTO",
      id,
      payload
    })

export const startEditGasto=(id,payload)=>{
  return (dispatch, getState)=>{
    const auth = getAuth()
    const userId = getState(auth).auth.uid;
    const referencia = ref(db, `users/${userId}/gastos`)
    return update(child(referencia, id),{...payload}).then(()=>{
            dispatch(editGasto(id, payload))})
        }
      }

export const getGastos=(arrGastos)=>({
  type: "GET_GASTOS",
  arrGastos
})

export const startGetGastos=()=>{
  const defaultDisplayedGastos = []
  return (dispatch, getState)=>{
    const auth = getAuth()
    const userId = getState(auth).auth.uid;
    const referencia = ref(db, `users/${userId}/gastos`)
    return get(referencia).then((snapshot)=>{

          snapshot.forEach(fireGasto=>{
            defaultDisplayedGastos.push({
              id: fireGasto.key,
              ...fireGasto.val()})
          })
        }).then(()=>{
        dispatch(getGastos(defaultDisplayedGastos))}
      )
    }
}
