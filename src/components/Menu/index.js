import React, { Component, PropTypes } from 'react';

import { IndexLink, Link } from 'react-router';
import './Menu.scss';
import routePath from '../../routes/routePath';

class Menu extends Component {
	constructor(props) {
    super(props);
    // this.state = {
    // 	list:[
    // 		{ name:'首页' ,path:'/' },
    // 		{ name:'技能' ,path:'/Skills' },
    // 		{ name:'作品' ,path:'/Projects' },
    // 		{ name:'联系' ,path:'/Contact' },
    // 		{ name:'简历' ,path:'/404' },
    // 		{ name:'旧版' ,path:'/404' }
    // 	]
    // };
  }
  render() {
    return (
	    <div className='menuBox'>
	    	<ul className='clearfix'>
	    		
	    		{
	    			routePath.map((value,index)=>{
	    				return (
							<li key={index}>
								{
									value.path?
									<Link  to={value.path} activeClassName="active" onlyActiveOnIndex={true} >{value.name}</Link>
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
