import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const LogInAccess=({
  isAuthenticated,
  component:LogInPage,
  ...rest
})=>{
    return isAuthenticated ? (<Navigate to="/dashboard" />) : (<LogInPage />)
}

const mapStateToProps=((state)=>({
  isAuthenticated: !!state.auth.uid
})
)

export default connect(mapStateToProps)(LogInAccess)
