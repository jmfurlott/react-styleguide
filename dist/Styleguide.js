"use strict";

var _interopRequire = function (obj) {
  return obj && (obj["default"] || obj);
};

"use strict";

var React = _interopRequire(require('react/addons'));

var Styleguide = React.createClass({
  displayName: "Styleguide",


  listComponentTitles: function () {
    var children = this.props.children;

    children = (React.Children.count(children) == 1) ? [children] : children;

    return children.map(function (child) {
      var title = child.props.title.replace(" ", "-");
      return React.createElement("li", null, React.createElement("a", {
        href: "#" + title
      }, child.props.title));
    });
  },

  listComponents: function () {
    var children = this.props.children;
    var self = this;

    children = (React.Children.count(children) == 1) ? [children] : children;
    return children.map(function (child) {
      console.log(child);

      var title = child.props.title.replace(" ", "-");

      return (React.createElement("div", {
        className: "Styleguide-components-component",
        id: title
      }, React.createElement("h2", {
        className: "Styleguide-components-component-title"
      }, child.props.title), React.createElement("p", {
        className: "Styleguide-components-component-description"
      }, child.props.description), React.createElement("div", {
        className: "Styleguide-components-component-example"
      }, child.props.children), React.createElement("div", {
        className: "Styleguide-components-component-code"
      }, React.createElement("pre", null, React.createElement("code", {
        className: self.props.codeClassName ? self.props.codeClassName : "language-javascript"
      }, self.props.highlight ? self.props.highlight(child.props.example) : child.props.example)))));
    });
  },

  componentDidMount: function () {},

  render: function () {
    return (React.createElement("div", {
      className: "Styleguide"
    }, React.createElement("div", {
      className: "Styleguide-header"
    }, React.createElement("h1", null, this.props.title)), React.createElement("div", {
      className: "Styleguide-sidebar"
    }, React.createElement("ul", {
      className: "Styleguide-sidebar-list"
    }, this.listComponentTitles())), React.createElement("div", {
      className: "Styleguide-components"
    }, this.listComponents())));
  }

});

module.exports = Styleguide;