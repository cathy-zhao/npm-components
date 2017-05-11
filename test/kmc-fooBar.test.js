import React from 'react';
import { expect } from 'chai';
import TestUtils from 'react-addons-test-utils';
import KmcFooBar from '../src/components/kmc-fooBar/kmc-fooBar.jsx';

function shallowRender(Component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(<Component/>);
  return renderer.getRenderOutput();
}

describe('Shallow Rendering', function(){
    it('content is what', function(){
        const foobar = shallowRender(KmcFooBar);
        expect(foobar.props.children[0].type).to.equal('h1');
    })
})
