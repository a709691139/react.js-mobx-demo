import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable,action } from 'mobx';


class Contact extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount(){
  }
  render(){
    return(
      <div>
        Contact
      </div>

    );
  }
}

export default Contact;

