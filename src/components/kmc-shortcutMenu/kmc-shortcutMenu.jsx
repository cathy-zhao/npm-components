import KmcCard from '../kmc-card/kmc-card.jsx';
import './kmc-shortcutMenu.less';
import {translate} from 'react-i18next';

const KmcShortcutMenu = (props) => {
    let {menu} = props;

    return  <KmcCard>
                <div className="kmc kmc-shortcutMenu">
                    {menu.map((item) => <Item {...item}/>)}
                </div>
            </KmcCard>
}

const Item = (props) => {
    let {imgUrl, text, handleClick} = props;
    return  <div className="item" onClick={handleClick}>
                <div className="item-img">
                    <img src={imgUrl}/>
                </div>
                <div className="item-label">
                    <label>{text}</label>
                </div>
            </div>
}

export default translate()(KmcShortcutMenu);
