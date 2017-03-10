import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { IndexLink, Link } from 'react-router';
import './AppContainer.scss';

class AppContainer extends Component {

  render() {
  	const key = this.props.location.pathname.split('/')[1] || 'root';
    return <div>
    	<IndexLink to="/" activeStyle={{color: 'red'}}>index counter   </IndexLink>
    	<Link to={{ pathname: '/what/first', state:{userid: 10086}, query: { age: 23 } }} activeStyle={{color: 'red'}}>what</Link>
    	<ReactCSSTransitionGroup
        component="div" transitionName="swap"
        transitionEnterTimeout={500} transitionLeaveTimeout={500}
      >
        {React.cloneElement(this.props.children || <div />, { key })}
      </ReactCSSTransitionGroup>
    </div>
  }
}

export default AppContainer
