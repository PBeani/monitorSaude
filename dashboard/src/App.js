import React, { Component } from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path='/home' component={Dashboard}></Route>
      </Switch>
    )
  }
}

export default App;
