import moment from 'moment';

export default (gastos, { text, sortBy, startDate, endDate })=>{
  const gastosFiltrados = gastos.filter(item=>{
    const createdAtMoment = moment(item.createdAt)

    const filtroStartDate = startDate ? startDate.isSameOrBefore(createdAtMoment, "day") : true
     const filtroEndDate = endDate ? endDate.isSameOrAfter(createdAtMoment, "day") : true
    const filtroText = item.name.toLowerCase().includes(text.toLowerCase())

    return filtroText && filtroStartDate && filtroEndDate
  })
  const gastosFiltradosOrdenados = (sortBy == "amount") ? gastosFiltrados.sort(function(a, b){return a.amount - b.amount})
                        : gastosFiltrados.sort(function(a, b){return a.createdAt - b.createdAt})
  return gastosFiltradosOrdenados
}
