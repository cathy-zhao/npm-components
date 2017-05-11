import React from 'react';
import { translate } from 'react-i18next';
import './kmc-fooBar.less';

class KmcFooBar extends React.Component{

    static defaultProps = {
        titleText: "我是控件 fooBar"
    }

    constructor(props) {
        super(props);
    }

    render(){
        const { t:_ } = this.props;
        return  <div className="kmc kmc-fooBar">
                    <h1>{_(this.props.titleText)}</h1>
                </div>
    }
}

export default translate()(KmcFooBar);
