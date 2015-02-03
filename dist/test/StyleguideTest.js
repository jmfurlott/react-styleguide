"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

"use strict";

var expect = require('chai').expect;
var jsdom = require('jsdom').jsdom;
global.document = jsdom("");
global.window = document.parentWindow;
global.navigator = {};
navigator.userAgent = "node";

describe("Styleguide", function () {
  var React = _interopRequire(require('react/addons'));

  var TestUtils = React.addons.TestUtils;


  // Import component here

  // Tests here
  it("says hello world", function () {
    expect(true).to.be.true;
  });
});