import React, {
  Component,
  PropTypes
} from 'react';

import {
  IndexLink,
  Link
} from 'react-router';
import './Menu.scss';
import routePath from '../../routes/routePath';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMaxWidth1000: false,
      display: true
    };
    this.changeMenuStyle = this.changeMenuStyle.bind(this);
    this.toggleMenuBox = this.toggleMenuBox.bind(this);
  }
  changeMenuStyle() {
    if (document.body.clientWidth <= 1000) {
      //console.log(document.body.clientWidth);
      this.setState({
        isMaxWidth1000: true,
        display: false
      });
    } else {
      this.setState({
        isMaxWidth1000: false,
        display: true
      });
    }
  }
  toggleMenuBox() {
    //console.log("toggle")
    if (this.state.isMaxWidth1000) {
      this.setState({
        display: !this.state.display
      });
    }
  }
  componentDidMount() {
    this.changeMenuStyle();
    window.addEventListener("resize", this.changeMenuStyle);
  }

  render() {
    const {
      isMaxWidth1000,
      display
    } = this.state;
    return (
      <div className='menuBox' style={{display: display?"block":'none'}}>
	    	<ul className='clearfix'>
	    		{
	    			routePath.map((value,index)=>{
	    				return (
							<li key={index}>
								{
									value.path?
									<Link onClick={()=>this.toggleMenuBox()}  to={value.path} activeClassName="active" onlyActiveOnIndex={true} >{value.name}</Link>
									:
									<a href={value.outsidePath} target='_blank'>{value.name}</a>
								}
		    				</li>
	    				)
	    			})
	    		}
	    	</ul>
	    </div>
    )
  }
}

export default Menu;