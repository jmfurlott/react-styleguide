react-styleguide
----------------

A React component that takes in other components and organizes them into an easy to use styleguide.

Example Usage
-------------

Include the generated css file from `dist` if you want to use the styling that I've created in your project.

Just create a new component containing the Styleguide component.  Include all the components that you want in the styleguide and provide the information that you want in include in the props.

```
var React = require('react');
var Styleguide = require('react-styleguide');

// Require the components that you want to include
var Component1 = require('./Component1.js');
var Component2 = require('./Component2.js');
var Component3 = require('./Component3.js');

var Component = React.createClass({
  render: function() {
    <Styleguide>
      <Component1/>
      <Component2/>
      <Component3/>
    </Styleguide>
  }
});
```

Screenshots
-----------

Coming soon

License
-------

MIT
