import React, { Component } from 'react';
import { render } from 'react-dom';
import "./index.scss";

import Library from './library';
import App from './components/App';

if (module.hot) {
  module.hot.accept('./library', function() {
    console.log('Accepting the updated library module!');
    Library.log();
  })
}


render(<App />, document.getElementById('root'));