import React from 'react';
import { translate } from 'react-i18next';
import './kmc-button.less';

class KmcButton extends React.Component{

    static defaultProps = {
        text: "按钮",
        btnType: '',
        handleClick: ()=>{}
    }

    static propTypes = {
        text: React.PropTypes.string,
        btnType: React.PropTypes.string,
        handleClick: React.PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("handleClick");
        this.props.handleClick();
    }

    render(){
        const { t:_, text, btnType} = this.props;
        return  <button className={`kmc kmc-button ${btnType}`} onClick={this.handleClick}>
                    {_(text)}
                </button>
    }
}

export default translate()(KmcButton);
