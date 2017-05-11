import React from 'react';
import ReactDOM from 'react-dom';
import {KmcFooBar} from '../../../index.js';

class Demo extends React.Component{

    render(){
        return  <KmcContainer>
                    <h1>测试 KmcFooBar</h1>
                    <KmcFooBar titleText = "我是 FooBar"/>
                </KmcContainer>
    }
}

ReactDOM.render(<Demo/>, document.body);
