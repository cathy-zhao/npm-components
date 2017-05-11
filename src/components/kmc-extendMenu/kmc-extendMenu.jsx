import React from 'react';
import './kmc-extendMenu.less';
import KmcCard from '../kmc-card/kmc-card.jsx';
import {translate} from 'react-i18next';

class KmcExtendMenu extends React.Component{

    static defaultProps = {
        title: '功能模块名',
        imgPath: '',
        menu: []
    }

    state = {
        open: false
    }

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({open: !this.state.open});
    }

    render(){
        const {t:_, imgPath, title, menu, newFunctions} = this.props;
        var list = null;
        if(this.state.open){
            list    =   <div className="extendMenu-content">
                            {
                                menu.map((item) => <Item {...item}/>)
                            }
                        </div>
        }

        return  <KmcCard>
                    <div  className="kmc kmc-extendMenu">
                        <div className="extendMenu-select" onClick={this.handleClick}>
                            <img src={imgPath}/>
                            <div className="extendMenu-title">
                                <label>{_(title)}</label>
                                {newFunctions?<div className="extendMenu-notice">{newFunctions}</div>:null}
                            </div>
                            <div className={this.state.open?"select-open":"select-close"}/>
                        </div>
                        {list}
                    </div>
                </KmcCard>
    }
}

const Item = (props) => {
    let {text, handleClick} = props;
    return  <div className="extendMenu-item">
                <button onClick={handleClick}>
                    {text}
                </button>
            </div>
}

export default translate()(KmcExtendMenu);
