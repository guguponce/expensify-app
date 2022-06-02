import React from 'react';
import moment from 'moment';
import { removeGasto } from "../actions/gastos"

const GastoIndividual=({ id, name, description, createdAt, amount })=>(
  <div>
    <div className="name-description-date">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Created at: {(createdAt)}</p>
    </div>
    <div>
      <h3>${amount}</h3>
    </div>
  </div>
)

export default GastoIndividual
