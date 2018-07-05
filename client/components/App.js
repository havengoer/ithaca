import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header.js';
import Home from './Home.js';

class App extends Component {
 
//<Route path="/hello" component={Hello} />

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
          <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
