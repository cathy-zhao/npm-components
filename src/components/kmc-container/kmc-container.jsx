import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n.js';
import './kmc-container.less';
import 'react-fastclick';
// i18n.changeLanguage('zh');

export default class KmcContainer extends React.Component{

    render(){
        return  <I18nextProvider i18n={ i18n }>
                    <div className="kmc kmc-container">
                    {this.props.children}
                    </div>
                </I18nextProvider>
    }
}
