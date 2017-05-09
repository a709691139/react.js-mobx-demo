import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Slider extends Component{
  constructor(props) {
    super(props);
    this.state={
      radioList:['all','web','webApp','nativeApp'],
      selected:'all',
      dataList :[],
    }
  }

  changeRadio(str){
    this.setState({
      selected:str
    });
  }

  componentDidMount(){
    this.setState({
      dataList: service.getProjects()
    });
  }
  render(){
    return(
      <div className='Projects'>
        
      </div>

    );
  }
}

export default Projects;

