import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable,action } from 'mobx';
import  './style.scss';
import { Link } from 'react-router';

class Skills extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
  }
  render(){
    return(
      <div className='skills'>
        <h2 className='title'>专业开发技术</h2>
        <div className='intro'>
          <p>1、专业的页面制作：切图, html, css, 电脑手机布局, siteserver cms后台。</p>
          <p>2、精通webApp架构，打包工具webpack配置,  babel es6语法, 组件式开发。</p>
          <p>3、掌握基础原生js, jq,  框架react+angular。</p>
          <p>4、移动端安卓和苹果应用开发，react native 技术。</p>
          <p>5、后端php开发，数据库操作。</p>
          <p>6、web canvas游戏开发。</p>
        </div>
        <div className="btnBox"><Link to='/Skills' className="btn">查看项目</Link></div>
      </div>

    );
  }
}

export default Skills;

