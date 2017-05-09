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
// import  './style.scss';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radioList: ['all', 'web', 'webApp', 'nativeApp'],
      selected: 'all',
      dataList: {}
    }
  }

  changeRadio(str) {
    this.setState({
      selected: str
    });
  }

  componentDidMount() {

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
          <li>
            <span className='triangle triangle-left-bottom'></span>
            <span className='triangle triangle-right-bottom'></span>
          </li>
        </ul>
      </div>

    );
  }
}

export default Projects;