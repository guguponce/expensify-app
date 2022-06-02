import React from 'react';
import { Link } from 'react-router-dom';

const NoMatch=()=>(
  <div>
    <h2>404!</h2>
    <Link to="/">Go Home!</Link>
  </div>
);

export default NoMatch;
