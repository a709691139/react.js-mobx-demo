import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable,action } from 'mobx';

// what/1
class Counter extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    console.log('userid',this.props.location.state.userid);
    console.log('age',this.props.location.query.age);
    console.log('id',this.props.params.id)
  }
  render(){
    return(
      <div>
        what Page 
        <div style={{ marginRight:'20px',color:'#0f0' }}>{this.props.location.state.userid}</div>
        <div>{this.props.location.query.age}</div>
      </div>

    );
  }
}

export default Counter;

