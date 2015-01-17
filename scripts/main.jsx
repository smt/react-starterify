var React = require('react/addons');
window.React = React;

'use strict';

var App = require('./components/app.jsx');

React.render(<App />, document.getElementById('app'));
