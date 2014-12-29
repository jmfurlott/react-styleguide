'use strict';

import React from 'react/addons';
import Styleguide from './Styleguide.js';

// Components to be included
import Button from './examples/Button.js'; 

React.render(<Styleguide title="Example Project Styleguide">
                 <div 
                  title="Button" 
                  description="Here is a description describing a simple Button and all that it has to offer." 
                  example='<div className="Blockquote">
  <div className="Blockquote-text">{this.props.text}</div>
  <span className="Blockquote-speaker">&mdash; {this.props.speaker}</span>
</div>'
                >
                  <Button />
                  <Button />
                  <Button />
                </div>

                <div 
                  title="Button1" 
                  description="Here is a description describing a simple Button and all that it has to offer." 
                  example="<Button />"
                >
                  <Button />
                </div>
                <div 
                  title="Button2" 
                  description="Here is a description describing a simple Button and all that it has to offer." 
                  example="<Button />"
                >
                  <Button />
                </div>
 
                <div 
                  title="Button" 
                  description="Here is a description describing a simple Button and all that it has to offer." 
                  example="<Button />"
                >
                  <Button />
                </div>
 
                <div 
                  title="Button5" 
                  description="Here is a description describing a simple Button and all that it has to offer." 
                  example="<Button />"
                >
                  <Button />
                </div>
 
                <div 
                  title="Button" 
                  description="Here is a description describing a simple Button and all that it has to offer." 
                  example="<Button />"
                >
                  <Button />
                </div>
 
                <div 
                  title="Button" 
                  description="Here is a description describing a simple Button and all that it has to offer." 
                  example="<Button />"
                >
                  <Button />
                </div>
            </Styleguide>
             , document.getElementById('demo'));

