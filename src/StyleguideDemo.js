'use strict';

import React from 'react/addons';
import Styleguide from './Styleguide.js';

import Prism from '../demo/vendor/prism.js';

// Components to be included
import Button from './examples/Button.js'; 
import Blockquote from './examples/Blockquote.js'; 

React.render(<Styleguide title="Example Project Styleguide" >
                 <div 
                  title="Blockquote" 
                  description="Here is a description describing a simple Blockquote component and how to use it." 
                  example='<Blockquote 
text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec imperdiet ligula." 
speaker="Mauris porta ac lectus" />'
                >
                  <Blockquote text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec imperdiet ligula." speaker="Mauris porta ac lectus" />
                </div>

                <div 
                  title="Button" 
                  description="Here is a description describing a simple Button component and how you would use it." 
                  example="<Button />"
                >
                  <Button />
                </div>
                <div 
                  title="Footer" 
                  description="Here is a description describing a simple Button and all that it has to offer." 
                  example="<Button />"
                >
                  <Button />
                </div>
 
           </Styleguide>
             , document.getElementById('demo'));

