import React, { PureComponent } from 'react';
import $ from 'jquery';
import './App.css';

import SEWNavbar from './modules/SEWNavbar';

window.jQuery = $;
global.$ = $

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <SEWNavbar/>
      </div>
    );
  }
}

export default App;
