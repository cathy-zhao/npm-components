import React from 'react';
import './kmc-downSel.less';
import {kmcAddTitle} from '../kmc-addTitle/kmc-addTitle.jsx';
import {translate} from 'react-i18next';

class KmcDownSel extends React.Component{

    static defaultProps = {
        downList: []
    }

    state = {
        open: false,
        selectIndex: 0
    }

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);
    }

    handleClick(){
        this.setState({open: !this.state.open});
    }

    handleItemClick(index){
        console.log("index:", index);
        this.setState({selectIndex: index, open: false});

    }

    getValue(){
        return  {
            selectKey: this.props.downList[this.state.selectIndex].key,
            selectIndex: this.state.selectIndex
        }
    }

    render(){
        const { t:_ } = this.props;
        var list = null;
        if(this.state.open){
            list =  <ul>
                    {this.props.downList.map((item, index) =><li onClick={this.handleItemClick.bind(this, index)}>{_(item.value)}</li>)}
                    </ul>
        }

        return  <div className="kmc kmc-downSel">
                    <div className="select" onClick={this.handleClick}>
                        <label>{_(this.props.downList[this.state.selectIndex].value)}</label>
                        <div className={this.state.open?"select-open":"select-close"}/>
                    </div>
                    {list}
                </div>
    }
}

export default translate()(kmcAddTitle(KmcDownSel));
