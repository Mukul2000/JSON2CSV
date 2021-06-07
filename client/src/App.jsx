import './App.css';
import React from 'react';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import UserDetail from './Components/UserDetail/UserDetail';
import FileDetail from './Components/FileDetail/FileDetail';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/user/:name/:id/:filename'> <FileDetail /> </Route>
        <Route path='/user/:name/:id'> <UserDetail /> </Route>
        <Route path='/login'> <Login /> </Route>
        <Route path='/'> <Home /> </Route>
      </Switch>
    </Router>
  );
}

export default App;
