import './kmc-checkbox.less';
import {translate} from 'react-i18next';

const KmcCheckbox = (props) => {
    var {array, handleClick, t, checkboxType} = props;
    return  <div className="kmc kmc-checkbox">
                {
                    array.map((item) =>
                    <CheckboxLabel {...item} handleClick={handleClick} t={t} checkboxType={checkboxType}/>
                    )
                }
            </div>
}

const CheckboxLabel = (props) => {
    var {name, text, value, handleClick, t:_, checkboxType} = props;
    return  <label className="checkbox-label">
                <input className="checkbox-input" type="checkbox" name={name} value={value} onClick={handleClick.bind(this, value)}/>
                <span className={`checkbox-span ${checkboxType}`}></span>{_(text)}
            </label>
}

KmcCheckbox.defaultProps = {checkboxType: 'round'}

export default translate()(KmcCheckbox);
