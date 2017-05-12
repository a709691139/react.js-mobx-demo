import React, {
  Component,
  PropTypes
} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  IndexLink,
  Link
} from 'react-router';
import './AppContainer.scss';
import Menu from '../components/Menu';

class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadAnimation: false
    };
    this.timer = null;
  }
  render() {
    const key = this.props.location.pathname.split('/')[1] || 'root';
    return <div className='pageContainer'>
      <div className={"header clearfix margin-center "+ (this.state.loadAnimation && "on")}>
        <div className="leftLogo">JinPeng</div>
        <i className='ion-navicon' onClick={()=>this.refs["menu"].toggleMenuBox()}></i>
        <Menu ref="menu" />
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
  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        loadAnimation: true
      });
    }, 500);

  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
}
/*
<Link to="/counter" activeStyle={{color: 'red'}}>index counter   </Link>
<Link to={{ pathname: '/what/first', state:{userid: 10086}, query: { age: 23 } }} activeStyle={{color: 'red'}}>what</Link>
*/
export default AppContainer