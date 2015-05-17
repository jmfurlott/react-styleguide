'use strict';

import React from 'react/addons';
import Styleguide from './Styleguide.js';

import Prism from '../demo/vendor/prism.js';

// Components to be included
import Button from './examples/Button.js'; 
import Blockquote from './examples/Blockquote.js'; 
import Footer from './examples/Footer.js';

React.render(<Styleguide title="Example Project Styleguide" >
                 <div 
                  title="Blockquote" 
                  description="Here is a description describing a simple Blockquote component and how to use it."
                >
                  <Blockquote text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec imperdiet ligula." speaker="Mauris porta ac lectus" />
                </div>

                <div 
                  title="Button" 
                  description="Here is a description describing a simple Button component and how you would use it."
                >
                  <Button />
                </div>
                <div 
                  title="Footer" 
                  description="Here is a description describing a simple Footer with a simple block of text."
                >
                  <Footer text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nec imperdiet ligula" />
                </div>
 
           </Styleguide>
             , document.getElementById('demo'));

