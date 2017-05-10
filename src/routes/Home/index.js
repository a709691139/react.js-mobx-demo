import React, {
  Component
} from 'react';
import {
  Link
} from 'react-router';
import './style.scss';
import service from '../../service';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      lastestProject:null,
    };
  }

  componentDidMount(){
    this.setState({
      productList: service.getProjects()
    });
  }

  render() {
    return (
      <div className='home'>
        <h2 className='title'>前端开发工程师</h2>
        <div className='intro'>
          <p>郑锦鹏：23岁，两年工作经验，本科学历，吉林大学珠海学院；</p>
          <p>热爱 <span className='blue'>web app</span> 开发，使用原生js、jquery、<span className='green'>angular</span>框架、<span className='green'>reactjs</span>框架 开发；</p>
          <p>安卓与苹果 手机应用开发，使用react native开发；</p>
          <p>web canvas游戏开发，纯canvas网页开发，使用pixi.js库。</p>
        </div>
        <ul className='list-icons'>
          <li>
            <Link to='/Skills'>
              <i className='ion-wrench'></i>
            </Link>
          </li>
          <li>
            <Link to='/Projects'>
              <i className='ion-trophy'></i>
            </Link>  
          </li>
          <li>
            <Link to='/Contact'>
             <i className='ion-ios-telephone'></i>
            </Link>
          </li>
          <li>
            <Link to='/404'>
             <i className='ion-document-text'></i>
            </Link>
          </li>
        </ul>
        <div className='projectBox clearfix'>
          <div className='left'>
            <div className='title'>最新作品</div>
            <div className='word'>Sed eu turpis vehicula, iaculis sapien eu, molestie libero. Cras ac urna in neque commodo sodales vel et dolor. Pellentesque aliquam semper lectus, nec consequat ex lacinia nec. </div>
            <Link to='/Projects' >查看更多</Link>
          </div>
          <div className='right'>
            <ul>
              {
                this.state.productList.length && this.state.productList.map((value,index)=>{
                  if(index<4){
                    return <li key={index}>
                              <div>
                                <img src={value.images[0]} />
                                <span><h4>{value.title}</h4></span>
                                </div>
                            </li>  
                  }
                })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;