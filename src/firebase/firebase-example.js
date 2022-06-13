import { initializeApp } from 'firebase/app';
import { push, off, onValue, remove, update, getDatabase, ref, set, get, child } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBtFrYEtK6ka8OXWmVS3YoSPnTcMfEmp8E",
  authDomain: "expensify-205e7.firebaseapp.com",
  databaseURL: "https://expensify-205e7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "expensify-205e7",
  storageBucket: "expensify-205e7.appspot.com",
  messagingSenderId: "442850532949",
  appId: "1:442850532949:web:57b9f6d15c0d27cf563edc",
  measurementId: "G-F3FQ5FW74E"
};



const app = initializeApp(firebaseConfig);

const db = getDatabase()
const dbRef = ref(db);

const setNewDatabase =(keyValue)=>{
set(ref(db),{...keyValue})
}

const setData=(key,value)=>{
  set(ref(db, key),value)
}


const getData=(key="name")=>{
get(child(dbRef, key)).then((snapshot) => {
  console.log(snapshot.val());
  }).catch((error) => {
  console.error(error);
});
}

setNewDatabase({age: 27})
setData("age", 30)
setData("name", "Augusto")

//setting data
//set(ref(database, "path/key"), "value")
set(ref(db,"escuela/grado/materia"), "biologia")


//getting data
//get(ubicacion).then((snapshot)=>{console.log(snapshot.val())}) -----> snapshot.val()
get(child(dbRef, "/escuela/grado")).then((snapshot)=>{setTimeout(console.log("example get",snapshot.val()), 5000)}).catch(error=>{console.log("error",error)})

//update
update(dbRef, {
  username: "augusto",
  age:31,
  education: {
    school: "gabriela mistral",
    university: "unc"
  },
  location: {
    city: "Cba",
    country: "Argentina"}
  })

//delete data
remove(child(dbRef, "name")) //using remove()
update(dbRef,{
  escuela: null
})//updating key to null
//get Root Database data once
get(child(dbRef, "location")).then((snapshot)=>{console.log("once data fetch",snapshot.val())})

update(dbRef,{
  "education/university": "unHam",
  location: {
    city: "Hamburg",
    country: "Deutschland"
  }})
//get data and subscribe to changes
//onValue(ubicacion, resolve->(snapshot)=>{}, reject->(error)=>{console.error()}
onValue(dbRef, (snapshot)=>{console.log(snapshot.val())}, (e)=>{console.error(e)})

setData("username", "martin")
setData("lista", '["apple","banana", "oranges"]')
get(child(dbRef, "lista")).then((snapshot)=>{console.log(typeof snapshot.val());})
//unsubscribe to changes off(path, tipo de evento, callback)
//->si no se especifica tipo de evento se desubscribe callbacks del path
//->se puede especificar callback a desubscribir

off(dbRef)


setTimeout(()=>{remove(dbRef)},
2000)
onValue(child(dbRef, "gastos"), (snapshot)=>{
  const arr = []
  snapshot.forEach(gasto=>{arr.push(gasto.val())})
  console.log(arr);
})


setTimeout(()=>{
  for(var i=0; i<4; i++){
push(ref(db,"gastos"), {
  name: "luz",
  description: "",
  amount: 100,
  createdAt: 1214515544254
})}}, 5000)
