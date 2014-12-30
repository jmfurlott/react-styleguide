'use strict';

import React from 'react/addons';

let Styleguide = React.createClass({ 

  listComponentTitles() {
    let children = this.props.children;
    
    children = (React.Children.count(children) == 1) ? [ children ] : children;
    
    return children.map(function(child) {
      let title = child.props.title.replace(' ','-');
      return <li><a href={'#' + title}>{child.props.title}</a></li>;
    });
  },

  listComponents() {
    let children = this.props.children;
    let self = this;

    children = (React.Children.count(children) == 1) ? [ children ] : children;
    return children.map(function(child) {
      console.log(child);
      
      let title = child.props.title.replace(' ','-');

      return(
        <div className="Styleguide-components-component" id={title}>
          <h2 className="Styleguide-components-component-title">{child.props.title}</h2>
          <p className="Styleguide-components-component-description">{child.props.description}</p>
          <div className="Styleguide-components-component-example">{child.props.children}</div>
          <div className="Styleguide-components-component-code">
            <pre>
              <code className={self.props.codeClassName ? self.props.codeClassName : "language-javascript"}> 
                {self.props.highlight ? self.props.highlight(child.props.example) : child.props.example}
              </code>
            </pre>
          </div>
        </div>
      );
    });
  },
  
  componentDidMount() {
    //console.log(this.props.children);
  },

  render() {

    return( 
      <div className="Styleguide">
        <div className="Styleguide-header">
          <h1>{this.props.title}</h1>
        </div>
        <div className="Styleguide-sidebar">
          <ul className="Styleguide-sidebar-list">
            {this.listComponentTitles()}
          </ul>
        </div>
        <div className="Styleguide-components">
          {this.listComponents()}
        </div>
      </div>
    );
  }

});

export default Styleguide;
