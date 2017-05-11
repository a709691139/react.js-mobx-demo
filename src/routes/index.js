import React from 'react';

import {
  Router,
  hashHistory,
  Route,
  IndexRoute
} from 'react-router';

import AppContainer from '../containers/AppContainer';
import Counter from './Counter';
import Nothing from './404';

import What from './What';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import ProjectsDetail from './Projects/Detail';


let islogin = ({
  params
}, replace) => {
  console.log('onEnter');
  if (false) {
    replace('/');
    console.log("未登录 跳转首页");
  }
};

const routes = <Route path="/" component={AppContainer}>

                  <IndexRoute component={Home}/>

                  <route path="counter" component={Counter}/>
                  <route path="Skills" component={Skills}/>
                  <route path="Projects" component={Projects}/>
                  <route path="Projects/Detail/:id" component={ProjectsDetail}/>
                  <route path="Contact" component={Contact}/>
                  
                  <Route  path="what/:id" component={What} onEnter={islogin.bind(this)} onLeave={()=>{console.log('onLeave')}} />

                  <Route  path="*" component={Nothing}  />
                  
                </Route>;


const router = <Router routes={routes} history={hashHistory}/>;



export default router;


/*
const index  = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('components/Index').default);
  }, 'index');
};

const routes = (
        <Route path='/' component={rootNode}>
            <IndexRedirect to='index' />
            <Route path='index' getComponent={index} />
        </Route>
    );
    注意点


1、require('components/Index').default中require方法的参数不能使用变量，只能使用字符串！

2、如果你的组件是使用es5的module.exports导出的话，那么只需要require('components/Index')即可。而如果你的组件是使用es6的export default导出的话，那么需要加上default！例如：require('components/Index').default

3、如果在路由页面使用了按需加载（require.ensure）加载路由级组件的方式，那么在其他地方（包括本页面）就不要再import了，否则不会打包生成chunk文件。简而言之，需要按需加载的路由级组件必须在路由页面进行加载。 

*/