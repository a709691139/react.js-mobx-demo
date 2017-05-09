import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { IndexLink, Link } from 'react-router';
import './AppContainer.scss';
import Menu from '../components/Menu';

class AppContainer extends Component {

  render() {
  	const key = this.props.location.pathname.split('/')[1] || 'root';
    return <div className='pageContainer'>
      <div className="header clearfix margin-center">
        <div className="leftLogo">JinPeng</div>
        <Menu />
      </div>
    	
    	<ReactCSSTransitionGroup
        component="div" transitionName="swap"
        transitionEnterTimeout={500} transitionLeaveTimeout={500}
        className='mainContainer margin-center'
      >
        {React.cloneElement(this.props.children || <div />, { key })}
      </ReactCSSTransitionGroup>
    </div>
  }
}
/*
<Link to="/counter" activeStyle={{color: 'red'}}>index counter   </Link>
<Link to={{ pathname: '/what/first', state:{userid: 10086}, query: { age: 23 } }} activeStyle={{color: 'red'}}>what</Link>
*/
export default AppContainer
