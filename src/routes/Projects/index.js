import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable,action } from 'mobx';
import  './style.scss';
import service from '../../service';

class Projects extends Component{
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
        <div className='radioBox'>
          <ul>
            {
              this.state.radioList.map((value,index)=>{
                return <li 
                  key={index}
                  className={value==this.state.selected?'on':null} 
                  onClick={()=>{this.changeRadio(value)}}>
                  {value}
                </li>
              })
            }
          </ul>
        </div>
        <ul className='list'>
          {
            this.state.dataList.map((value,index)=>{
              return(
                <li  key={index}>
                  <img src={value.images[0]}/>
                  <p className='title'>{value.title}</p>
                    {
                      value.intro.map((v,i)=>{
                        return <p key={i} className='intro'>{v}</p>
                      })
                    }
                  <span className='triangle triangle-left-bottom'></span>
                  <span className='triangle triangle-right-bottom'></span>
                </li>
              );
            })
          }
        </ul>
      </div>

    );
  }
}

export default Projects;

