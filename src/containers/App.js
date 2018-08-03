import React, { Component } from 'react';
import Home from 'Home';
import Projects from 'Projects';
import { BrowserRouter, Route } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
        </div>
      </BrowserRouter>
    );
  }
}
