import KmcButton from '../kmc-button/kmc-button.jsx';
import KmcCard from '../kmc-card/kmc-card.jsx';
import './kmc-cardMenu.less';
import {translate} from 'react-i18next';

const KmcCardMenu = (props) => {
    let {title, menu, t:_} = props;
    return  <div className="kmc kmc-cardMenu">
                <div className="cardMenu-title">
                    <label>{title}</label>
                </div>
                <div className="menu">
                    {
                        menu.map((item) => <Item {...item} _={_}/>)
                    }
                </div>
            </div>
}

const Item = (props) => {
    let {titleText, btnText, helpText, handleBtnClick, handleHelpClick, _} = props;
    return  <div className="cardMenu-item">
                <div className="cardMenu-item-title">
                    <label>{_(titleText)}</label>
                </div>
                <KmcButton text={_(btnText)} handleClick={handleBtnClick}/>
                <div className="cardMenu-item-help" onClick={handleHelpClick}>
                    <div className="cardMenu-item-help-img"></div>
                    <label>{_(helpText)}</label>
                </div>
            </div>
}

export default translate()(KmcCardMenu);
