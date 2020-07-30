import React from 'react';
import {Link, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { 

} 
  from './utils';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import './App.css';

import ToDoEditForm from './components/ToDoEditForm'

function App() {
  return (
    <div className="App">

      <Link to='/sign-up'>Sign-Up</Link>
      <Link to='/login'>Login</Link>
      <Link to='/dashboard'>Dashboard</Link>

      <Route 
        path='/sign-up'
        component={Signup}
      />
      <Route 
        path='/login'
        component={Login}
      />
      <PrivateRoute 
        path="/dashboard"
        component={Dashboard}
      />
      <PrivateRoute 
        path='/dashboard/edit'
        component={ToDoEditForm}
      />

    </div>
  );
}
const mapStateToProps = state => {
  return {


  };
};

export default connect(
  mapStateToProps, 
  {

  }
)(App);
