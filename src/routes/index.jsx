import React from 'react';

import { Router, hashHistory, Route, IndexRoute } from 'react-router';

import AppContainer from '../containers/AppContainer';
import Counter from './Counter';
import What from './What';


let islogin = ({params}, replace) => {
	console.log('onEnter');
	if(false){
		replace('/');
		console.log("未登录 跳转首页");
	}
};

const routes =  <Route path="/" component={AppContainer}>
                  <IndexRoute component={Counter}/>
                  <Route  path="what/:id" component={What} onEnter={islogin.bind(this)} onLeave={()=>{console.log('onLeave')}} />
                </Route>;


const router = <Router routes={routes} history={hashHistory}/>;

export default router;