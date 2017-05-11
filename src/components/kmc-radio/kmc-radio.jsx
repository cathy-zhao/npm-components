import './kmc-radio.less';
import {translate} from 'react-i18next';

const KmcRadio = (props) => {
    var {array, handleClick} = props;
    return  <div className="kmc kmc-radio">
                {
                    array.map((item) =>
                    <RedioLabel {...item} handleClick={handleClick} t={props.t}></RedioLabel>
                    )
                }
            </div>
}

const RedioLabel = (props) => {
    var {name, text, value, handleClick, t:_} = props;
    return  <label className="radio-label">
                <input className="radio-input" type="radio" name={name} value={value} onClick={handleClick.bind(this, value)}/>
                <span className="radio-span"></span>{_(text)}
            </label>
}

export default translate()(KmcRadio);
