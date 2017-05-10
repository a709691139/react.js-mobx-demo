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