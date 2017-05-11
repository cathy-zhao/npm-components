import React from "React" ;
import './kmc-addTitle.less';
import {translate} from 'react-i18next';

export const kmcAddTitle = (ComposedComponent) => class extends React.Component {
    static defaultProps = {
        title: '左边标题'
    }

    render() {
        const { t:_ } = this.props;
        return  <div className="kmc kmc-addTitle">
                    <label>{_(this.props.title)}</label>
                    <div className="div-right"><ComposedComponent {...this.props} /></div>
                </div>
    }
}
