'use strict';

import React from 'react/addons';
import Styleguide from './Styleguide.js';

React.render(<Styleguide>
                <div className="Component1" title="First Component" description="This is a description describing this component" />
                <div className="Component2" title="Second Component" description="This is a description describing the second component" />
             </Styleguide>
             , document.getElementById('demo'));

