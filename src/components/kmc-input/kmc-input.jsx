import React from 'react';
import {kmcAddTitle} from '../kmc-addTitle/kmc-addTitle.jsx';
import {add, subtr} from '../../util/kmc-computeUtils';
import {translate} from 'react-i18next';
import './kmc-input.less';

class KmcInput extends React.Component{

    static defaultProps = {
        text: '按钮',
        handleBtnClick: ()=>{},
        handlePlusMinusClick: ()=>{},
        inputNum: 15,
        type: '',
        baseValue: 1
    }

    static propTypes = {
        handleBtnClick: React.PropTypes.func,
        handlePlusMinusClick: React.PropTypes.func,
    }

    state = {
        value: ''
    }

    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputClick = this.handleInputClick.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handlePlusMinusClick = this.handlePlusMinusClick.bind(this);
        this.handleTiming = this.handleTiming.bind(this);
        this.handleArrow = this.handleArrow.bind(this);
    }

    handleInputChange(event) {
        // TODO: 判断运行环境
        console.log("输入数据");
        this.setState({value: event.target.value});
        if (event.target.value.length != this.props.inputNum) {
            return;
        }
    }

    handleInputClick(){
        // TODO: 调用键盘
        console.log("弹出键盘控件");
    }

    handleBlur(){
        // TODO: 隐藏键盘
        console.log("handleBlur");
    }

    handleBtnClick(){
        console.log("handleClick");
        this.props.handleBtnClick();
    }

    handlePlusMinusClick(action){
        var result = this.state.value;
        switch (action) {
            case 'minus':
                result = subtr(this.state.value, this.props.baseValue);
            break;
            case 'plus':
                result = add(this.state.value, this.props.baseValue);
            break;
        }
        this.setState({value: result});
        this.props.handlePlusMinusClick(action);
    }

    handleTiming(){
        // TODO: 处理计时按钮
        console.log("handleTiming");
    }

    handleArrow(){
        // TODO: 处理右箭头
        console.log("handleArrow");
    }

    render(){
        const { t:_ } = this.props;
        var plus = null;
        var minus = null;
        var btn = null;
        var timing = null;
        var arrow = null;
        if(this.props.type == 'hasBtn'){
            btn = <button onClick={this.handleBtnClick}>{_(this.props.text)}</button>
        }else if(this.props.type == 'hasPlusMinus'){
            plus = <div className='input-plus' onClick={this.handlePlusMinusClick.bind(this, 'plus')}/>
            minus = <div className='input-minus' onClick={this.handlePlusMinusClick.bind(this, 'minus')}/>
        }else if(this.props.type == 'hasTiming'){
            timing = <div className='input-timing' onClick={this.handleTiming}/>
        }else if(this.props.type == 'hasArrow'){
            arrow = <div className='input-arrow'  onClick={this.handleArrow}/>
        }
        let inputProps = {
            type: "text",
            placeholder: _(this.props.placeholder),
            value: this.state.value,
            onChange: this.handleInputChange,
            onClick: this.handleInputClick,
            onBlur: this.handleBlur
        }
        return  <div className="kmc kmc-input">
                    {minus}
                    <input {...inputProps}></input>
                    {plus}
                    {btn}
                    {timing}
                    {arrow}
                </div>
    }
}

export default translate()(kmcAddTitle(KmcInput));
