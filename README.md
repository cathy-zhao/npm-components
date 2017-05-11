# 概述

* 本项目开发环境采用 [NodeJS](http://nodejs.org) 搭建，你的电脑上必须先要安装 NodeJS。
* [NPM](https://www.npmjs.org/) 是 NodeJS 的模块管理系统，本项目所有依赖的第三方模块都通过 NPM 来进行安装。

# 安装开发环境

1. 安装 NodeJS

* MAC

方法1: 推荐通过 `brew install node` 命令来安装

方法2: 下载 [NodeJS 的 Mac 安装包](https://nodejs.org/dist/v4.1.1/node-v4.1.1.pkg)

* Windows

64 位: https://nodejs.org/dist/v4.1.1/node-v4.1.1-x64.msi

32 位: https://nodejs.org/dist/v4.1.1/node-v4.1.1-x86.msi

* Linux

Linux 下的安装方法有待补充。

* 通常安装完 NodeJS 就意味着已经安装了 NPM。

2. check-out 源代码

* 请咨询你周围的同事

3. 准备开发环境

* 在源代码目录执行以下命令

`npm install`

将会自动安装所有依赖的第三方开发包。注意只有首次运行这份源代码时才需要执行这个命令。

# 开发

(待完善)

* 编写源代码
* 编写测试用例测试你开发的控件
* 用浏览器查看运行效果，调试你的代码

# install

```bash
npm install https://github.com/cathy-zhao/npm-components.git
```

# Usage

```javascript
import {KmcFooBar, KmcContainer, KmcButton …} from 'h5-dumb-lib';

class Demo extends React.Component{
    render(){
        return  <KmcContainer>
                    <KmcFooBar titleText = "我是 FooBar"/>
                    <KmcButton text = "立即开启"/>
                    <KmcButton text = "取消"      btnType = 'default cancel'/>
                    <KmcButton text = "+关注"     btnType = 'small ok'/>
                    <KmcButton text = "申请"      btnType = 'large ok'/>
                    <KmcButton text = "重新测试"   btnType = 'large cancel'/>
                    <KmcButton text = "申购"      btnType = 'fat'/>
                </KmcContainer>
    }
}

ReactDOM.render(<Demo/>, document.body);
```

