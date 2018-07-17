import React, { Component } from 'react';
import '../public/css/basic.css';

import NavComponent from './components/static/nav/NavComponent';
import WrapperComponent from './components/static/contents/WrapperComponent';

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavComponent />
        <WrapperComponent />
      </div>
    );
  }
}

export default App;
