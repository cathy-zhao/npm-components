import React from 'react';
import { translate } from 'react-i18next';
import './kmc-switch.less';

class KmcSwitch extends React.Component{

    static defaultProps = {
        text: '成交明细',
        clinchActive: false
    }

    static propTypes = {
        text: React.PropTypes.string,
        clinchActive: React.PropTypes.bool
    }

    state = {
        clinchActive: this.props.clinchActive,
    }

    constructor(props) {
        super(props);
        this.clinchHandler = this.clinchHandler.bind(this);
    }

    getHeight(){
        return document.getElementById('switch').clientHeight;
    }

    clinchHandler(){
        this.setState({
            clinchActive: !this.state.clinchActive,
        });
        this.props.clinchHandler && this.props.clinchHandler(!this.state.clinchActive);
    }

    render(){
        const { t:_ } = this.props;
        var classname = "kmc-switch-div";
        if(this.state.clinchActive){
            classname = "kmc-switch-div active";
        }
        return <div id="switch" className="kmc kmc-switch">
                    <div className='kmc-switch-label'>
                        <label>{_(this.props.text)}</label>
                    </div>
                    <div className={classname} onClick={this.clinchHandler}>
                    </div>
                </div>
    }
}

export default translate()(KmcSwitch);
