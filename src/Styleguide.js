'use strict';

import React from 'react/addons';

let Styleguide = React.createClass({ 

  listComponentTitles() {
    let children = this.props.children;
    
    return children.map(function(child) {
      return <li>{child.props.title}</li>;
    });
  },
  
  componentDidMount() {
    console.log(this.props.children);
  },

  render() {

    return( 
      <div className="Styleguide">
        <div className="Styleguide-header">
          <h1>Components</h1>
        </div>
        <div className="Styleguide-sidebar">
          <ul className="Styleguide-sidebar-list">
            {this.listComponentTitles()}
          </ul>
        </div>
        <div className="Styleguide-components">sfsf</div>
      </div>
    );
  }

});

export default Styleguide;
