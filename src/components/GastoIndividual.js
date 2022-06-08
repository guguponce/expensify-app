import React from 'react';
import moment from 'moment';
import { removeGasto } from "../actions/gastos"

const GastoIndividual=({ id, name, description, createdAt, amount })=>(
  <div className="nadeda-amount">
    <div className="name-description">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
    <div className="name-description date-amount">
      <h3>${amount}</h3>
      <p>{moment(createdAt).format("DD/MM/YYYY")}</p>
    </div>
  </div>
)

export default GastoIndividual
