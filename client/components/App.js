import React, { Component } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header.js';
import Home from './Home.js';
import Food from './Food.js';

class App extends Component {
 
//<Route path="/hello" component={Hello} />

  render() {
    return (
      <BrowserRouter>
        <div>
        <Header />   
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/food" component={Food} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
