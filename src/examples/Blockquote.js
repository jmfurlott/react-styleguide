'use strict';

var React = require('react');

var Blockquote = React.createClass({
  getInitialState: function() {
    return {
      text : false,
      speaker : false
    };
  },

  render: function() {
    return (
      <div className="Blockquote">
        <div className="Blockquote-text">{this.props.text}</div>
        <span className="Blockquote-speaker">&mdash; {this.props.speaker}</span>
      </div>
    );
  }
});

module.exports = Blockquote;
