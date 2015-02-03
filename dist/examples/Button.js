"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

"use strict";

var React = _interopRequire(require('react/addons'));

var Button = React.createClass({
  displayName: "Button",


  render: function () {
    return React.createElement("button", {
      className: "Button"
    }, "Hello world");
  }

});

module.exports = Button;