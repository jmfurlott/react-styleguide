'use strict';

import { expect } from 'chai';
import { jsdom } from 'jsdom';
global.document = jsdom('');
global.window = document.parentWindow;
global.navigator = {};
navigator.userAgent = 'node';

describe('Styleguide', function() { 

  import React from 'react/addons';
  let { TestUtils } = React.addons;

  // Import component here
  
  // Tests here
  it('says hello world', function() {
    expect(true).to.be.true;
  });

});
