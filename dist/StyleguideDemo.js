"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

"use strict";

var React = _interopRequire(require('react/addons'));

var Styleguide = _interopRequire(require('./Styleguide.js'));

var Prism = _interopRequire(require('../demo/vendor/prism.js'));

var Button = _interopRequire(require('./examples/Button.js'));

var Blockquote = _interopRequire(require('./examples/Blockquote.js'));

React.render(React.createElement(Styleguide, {
  title: "Example Project Styleguide"
}, React.createElement("div", {
  title: "Blockquote",
  description: "Here is a description describing a simple Blockquote component and how to use it.",
  example: "<Blockquote \ntext=\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec imperdiet ligula.\" \nspeaker=\"Mauris porta ac lectus\" />"
}, React.createElement(Blockquote, {
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec imperdiet ligula.",
  speaker: "Mauris porta ac lectus"
})), React.createElement("div", {
  title: "Button",
  description: "Here is a description describing a simple Button component and how you would use it.",
  example: "<Button />"
}, React.createElement(Button, null)), React.createElement("div", {
  title: "Footer",
  description: "Here is a description describing a simple Button and all that it has to offer.",
  example: "<Button />"
}, React.createElement(Button, null))), document.getElementById("demo"));