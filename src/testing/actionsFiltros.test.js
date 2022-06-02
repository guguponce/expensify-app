import { editFilterText, sortByAmount, sortByDate, setStartDate, setEndDate } from "../actions/filtros"
import moment from "moment";
import selectGastos from "../selectors/gastos"


test("get text filter object",()=>{
  const textFilter = editFilterText("gas")
  expect(textFilter).toEqual({
    type: "EDIT_FILTER_TEXT",
    text: "gas"
  })
})


test("get default text filter object",()=>{
  const textFilter = editFilterText()
  expect(textFilter).toEqual({
    type: "EDIT_FILTER_TEXT",
    text: ""
  })
})

test("get start filter object",()=>{
  const startFilter = setStartDate(moment(0))
  expect(startFilter).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0)
  })
})
test("get end filter object",()=>{
  const endFilter = setEndDate(moment(0))
  expect(endFilter).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0)
  })
})


test("get sort date object",()=>{
  const sortdate = sortByDate()
  expect(sortdate).toEqual({
    type: "SORT_DATE"
  })
})
test("get sort amount object",()=>{
  const sortamount = sortByAmount()
  expect(sortamount).toEqual({
    type: "SORT_AMOUNT"
  })
})

const ejemploGastos=[
  { id: 1,
    name: "gas",
    description: "",
    createdAt: 0,
    amount: 100
  },
  { id: 2,
    name: "luz",
    description: "",
    createdAt: moment(0).subtract(4,"days").valueOf(),
    amount: 200
  },
  { id: 3,
    name: "agua",
    description: "poorrr",
    createdAt: moment(0).add(4,"days").valueOf(),
    amount: 50
  }
]
test("filter by text",()=>{
  const filter={
    text: "a",
    sortBy: "",
    startDate: undefined,
    endDate: undefined
  }
    const filtradoText = selectGastos(ejemploGastos, filter)
    expect(filtradoText).toEqual([ejemploGastos[0],ejemploGastos[2]])
})
test("sort by amount",()=>{
  const filter={
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
    const filtradoText = selectGastos(ejemploGastos, filter)
    expect(filtradoText).toEqual([ejemploGastos[2],ejemploGastos[0],ejemploGastos[1]])});

test("sort by date",()=>{
  const filter={
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  }
    const filtradoText = selectGastos(ejemploGastos, filter)
    expect(filtradoText).toEqual([ejemploGastos[1],ejemploGastos[0],ejemploGastos[2]])})

test("filter by startdate",()=>{
  const filter={
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined
  }
    const filtradoText = selectGastos(ejemploGastos, filter)
    expect(filtradoText).toEqual([ejemploGastos[0], ejemploGastos[2]])
  })

  test("filter by endDate",()=>{
    const filter={
      text: "",
      sortBy: "date",
      startDate: undefined,
      endDate: moment(0),
    }
      const filtradoText = selectGastos(ejemploGastos, filter)
      expect(filtradoText).toEqual([ejemploGastos[1], ejemploGastos[0]])
    })
