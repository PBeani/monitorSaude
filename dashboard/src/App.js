import React, { Component } from 'react';
import Dashboard from './containers/Dashboard/Dashboard';
import { Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path='/' component={Dashboard}></Route>
      </Switch>
    )
  }
}

export default App;
