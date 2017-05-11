import React, {
  Component
} from 'react';
import {
  observer
} from 'mobx-react';
import {
  observable,
  action
} from 'mobx';
import './style.scss';
import service from '../../service';
import {
  Link
} from 'react-router';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioList: ['all', 'web', 'webApp', 'nativeApp'],
      selected: 'all',
      dataList: [],
    };
  }

  changeRadio(str) {
    this.setState({
      selected: str
    });
  }
  toDetailPage(id) {
    this.props.router.push({
      pathname: `/Projects/Detail/${id}`
    });
  }

  componentDidMount() {
    this.setState({
      dataList: service.getProjects()
    },()=>{
      document.body.scrollTop = 0;
    });
    const { type } = this.props.location.query;
    if(type && this.state.radioList.indexOf(type)!=-1){
      this.setState({selected:type});
    }
  }
  render() {
    return (
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
              if(this.state.selected=='all' || this.state.selected==value.type){
                return(
                  <li  key={index} >
                    <div className='top'>
                     <Link  to={"/Projects/Detail/"+value.id}><img src={value.images[0]}/></Link>
                    </div>
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
              }
            })
          }
        </ul>
      </div>

    );
  }
}

export default Projects;