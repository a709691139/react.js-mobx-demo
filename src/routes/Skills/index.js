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
        <div className='topBox'>
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
        <div className='bottomBox clearfix'>
          <div className='col'>
            <div className='inner'>
              <div className='bg bg-pink'></div>
              <div className='content'>
                <h3>普通网页制作</h3>
                <span className='solid-line'></span>
                <p>电脑、手机、h5页面、响应式网页都能制作，js特效动画，配合cms后台，购买域名服务器，一条龙服务。</p>
                <a href='#' className='checkbtn'>查看项目</a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='inner'>
              <div className='bg bg-blue'></div>
              <div className='content'>
                <h3>web app制作</h3>
                <span className='solid-line'></span>
                <p>各种网页app制作，采用angular@1.x或者react框架编写，后端方面用php开发。</p>
                <a href='#' className='checkbtn'>查看项目</a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='inner'>
              <div className='bg bg-green'></div>
              <div className='content'>
                <h3>手机app制作</h3>
                <span className='solid-line'></span>
                <p>使用react native 开发 iOS 和 Android 原生应用。</p>
                <p>已有3个上线项目。</p>
                <a href='#' className='checkbtn'>查看项目</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;

