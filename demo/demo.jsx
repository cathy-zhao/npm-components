import React from 'react';
import ReactDOM from 'react-dom';
import {KmcFooBar, KmcContainer, KmcButton, KmcInput,
    KmcZQDM, KmcRadio, KmcCheckbox, KmcSwitch, KmcDownSel,
    KmcAlertDialog, KmcShortcutMenu, KmcExtendMenu, KmcCardMenu} from '../lib/index.js';

class Demo extends React.Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        console.log("handleClick");
    }

    render(){
        let array = [
                    {name: 'radio', text: '全部', value: '400'},
                    {name: 'radio', text: '1/2', value: '200'},
                    {name: 'radio', text: '1/4', value: '100'}
                ];
        let test =  [{key: 1, value: '限价委托'}, {key: 2, value: '最优五档'}, {key: 3, value: '最优五档即时'}];

        let shortMenu = [
                                {
                                    imgUrl: "../src/res/img/icon/shortcut_buy.png",
                                    text: "买入",
                                    handleClick: ()=>{console.log("买入")}
                                },
                                {
                                    imgUrl: "../src/res/img/icon/shortcut_sale.png",
                                    text: "卖出",
                                    handleClick: ()=>{console.log("卖出")}
                                },
                                {
                                    imgUrl: "../src/res/img/icon/shortcut_buy.png",
                                    text: "撤单",
                                    handleClick: ()=>{console.log("撤单")}
                                },
                                {
                                    imgUrl: "../src/res/img/icon/shortcut_buy.png",
                                    text: "委托成交",
                                    handleClick: ()=>{console.log("委托成交")}
                                },
                                {
                                    imgUrl: "../src/res/img/icon/shortcut_buy.png",
                                    text: "资产",
                                    handleClick: ()=>{console.log("资产")}
                                },
                                {
                                    imgUrl: "../src/res/img/icon/shortcut_buy.png",
                                    text: "银证转帐",
                                    handleClick: ()=>{console.log("银证转帐")}
                                },
                                {
                                    imgUrl: "../src/res/img/icon/shortcut_buy.png",
                                    text: "资金流水",
                                    handleClick: ()=>{console.log("资金流水")}
                                },
                                {
                                    imgUrl: "../src/res/img/icon/shortcut_buy.png",
                                    text: "更多",
                                    handleClick: ()=>{console.log("更多")}
                                }
                            ];
        let extendMenu = [
                            {
                                text: '申购',
                                handleClick: ()=>{console.log("申购")}
                            },
                            {
                                text: '赎回',
                                handleClick: ()=>{}
                            },
                            {
                                text: '认购',
                                handleClick: ()=>{}
                            },
                            {
                                text: '撤单',
                                handleClick: ()=>{}
                            },
                            {
                                text: '基金合并',
                                handleClick: ()=>{}
                            },
                            {
                                text: '基金分拆',
                                handleClick: ()=>{}
                            },
                            {
                                text: '委托成交查询',
                                handleClick: ()=>{}
                            }
                        ];

        let cardMenu = [
                            {
                                titleText: '港股通',
                                btnText: '开通沪港通',
                                helpText: '沪港通交易指南',
                                handleBtnClick: ()=>{console.log("港股通")},
                                handleHelpClick: ()=>{console.log("帮助")}
                            },
                            {
                                titleText: '港股通',
                                btnText: '开通沪港通',
                                helpText: '沪港通交易指南',
                                handleBtnClick: ()=>{console.log("港股通")},
                                handleHelpClick: ()=>{console.log("帮助")}
                            },
                            {
                                titleText: '港股通',
                                btnText: '开通沪港通',
                                helpText: '沪港通交易指南',
                                handleBtnClick: ()=>{console.log("港股通")},
                                handleHelpClick: ()=>{console.log("帮助")}
                            },
                            {
                                titleText: '港股通',
                                btnText: '开通沪港通',
                                helpText: '沪港通交易指南',
                                handleBtnClick: ()=>{console.log("港股通")},
                                handleHelpClick: ()=>{console.log("帮助")}
                            }
                        ];

        return  <KmcContainer>
                    <KmcFooBar titleText = "我是 FooBar"/>
                    <KmcButton text = "立即开启"/>
                    <KmcButton text = "取消"      btnType = 'default cancel'/>
                    <KmcButton text = "+关注"     btnType = 'small ok'/>
                    <KmcButton text = "申请"      btnType = 'large ok'/>
                    <KmcButton text = "重新测试"   btnType = 'large cancel'/>
                    <KmcButton text = "申购"      btnType = 'fat'/>
                    <KmcInput title='证券代码'/>
                    <KmcInput type='hasBtn'placeholder='提示' handleBtnClick={this.handleClick}/>
                    <KmcInput type='hasPlusMinus'/>
                    <KmcInput type='hasArrow'/>
                    <KmcInput type='hasTiming'/>
                    <KmcRadio array={array} handleClick={this.handleClick}/>
                    <KmcCheckbox array={array} handleClick={this.handleClick}/>
                    <KmcCheckbox array={array} handleClick={this.handleClick} checkboxType='square'/>
                    <KmcSwitch />
                    <KmcDownSel downList={test} title='委托类型'/>
                    <KmcShortcutMenu menu={shortMenu}/>
                    <KmcExtendMenu imgPath='../src/res/img/icon/extend_lof.png' title='LOF基金' menu={extendMenu}/>
                    <KmcExtendMenu imgPath='../src/res/img/icon/extend_lof.png' title='ETF基金' menu={extendMenu} newFunctions={2}/>
                    <KmcCardMenu title="更多交易业务" menu={cardMenu} />
                </KmcContainer>
    }
}

ReactDOM.render(<Demo/>, document.body);
