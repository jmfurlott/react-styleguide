'use strict';

var React = require('react');

var Footer = React.createClass({
  getInitialState: function() {
    return {
      text : false
    };
  },

  render: function() {
    return (
      <div className="Footer">
        <div className="Footer-text">{this.props.text}</div>
      </div>
    );
  }
});

module.exports = Footer;
