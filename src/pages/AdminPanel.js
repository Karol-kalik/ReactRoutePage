import React from 'react';
import {Route, Redirect } from 'react-router-dom';

const permission = false;

const AdminPanel = () => {
  return (
    <Route render={() => (
      permission ? <h3>Panel admina</h3> : <Redirect to="Login"/>
    )}/>
  )
}

export default AdminPanel;