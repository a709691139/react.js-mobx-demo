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
import service from 'service';
import Slider from './Slider';
import {
  Link
} from 'react-router';

export default class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "type": "webApp",
      "title": "",
      "href": "https://github.com/a709691139/Pokemon",
      "images": [],
      "intro": [],
      "id": 0
    };
  }
  componentWillReceiveProps(props) {
    console.log(this.props);
    console.log('componentWillReceiveProps', this.props.params.id);
    this.componentDidMount();
  }
  componentDidMount() {
    console.log("加载");
    let id = this.props.params.id;
    let sendData = {
      id: id
    };
    let data = service.getProjects(sendData);
    // console.log(data);
    this.setState({
      "type": data.type,
      "title": data.title,
      "href": data.href,
      "images": data.images,
      "intro": data.intro,
      "id": data.id
    }, () => {
      document.body.scrollTop = 0;
    });
  }
  componentWillUnmount() {
    console.log('unmount');
  }
  render() {
    return (
      <div className='Projects_detail'>
        <Link to={`/Projects/Detail/${parseInt(this.props.params.id)+1}`} style={{color:"#fff"}}>跳转</Link>
        <button onClick={()=>{this.props.history.goBack()}}> 返回</button>
        <h1>{this.state.title}</h1>
        {
          this.state.href &&
          <a target='_blank' className='download' href={this.state.href}>详情</a>
        }
        {
          this.state.intro && this.state.intro.map((v,i)=>{
            return <p key={i} className='intro'>{v}</p>
          })
        }
        {
          this.state.images.length && 
           <Slider
            items={
              this.state.images.map((value,index)=>{
                return {
                  src: value,
                  alt: 'value',
                }
              })
            }
            speed={1.5}      
            delay={3}        
            pause={true}     
            autoplay={true}  
            dots={true}      
            arrows={true} 
          />
        }
      </div>

    );
  }
}