export  const editFilterText=(text = "")=>({
    type: "EDIT_FILTER_TEXT",
    text
  })

export  const sortByAmount=()=>({
    type: "SORT_AMOUNT"
  })

export  const sortByDate=()=>({
    type: "SORT_DATE"
  })

export  const setStartDate=(startDate=undefined)=>({
    type: "SET_START_DATE",
    startDate
  })

export  const setEndDate=(endDate=undefined)=>({
    type: "SET_END_DATE",
    endDate
  })
