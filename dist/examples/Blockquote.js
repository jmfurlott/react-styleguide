"use strict";

var React = require("react");

var Blockquote = React.createClass({
  displayName: "Blockquote",
  getInitialState: function () {
    return {
      text: false,
      speaker: false
    };
  },

  render: function () {
    return (React.createElement("div", {
      className: "Blockquote"
    }, React.createElement("div", {
      className: "Blockquote-text"
    }, this.props.text), React.createElement("span", {
      className: "Blockquote-speaker"
    }, "\u2014 ", this.props.speaker)));
  }
});

module.exports = Blockquote;