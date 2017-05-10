import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable,action } from 'mobx';
import  './style.scss';
import service from '../../../service';

export default class Detail extends Component{
  constructor(props) {
    super(props);
    this.state={
        "type": "webApp",
        "title": "",
        "href": "https://github.com/a709691139/Pokemon",
        "images": [],
        "intro": [],
        "id": 0
    };
  }

  componentDidMount(){
    let id = this.props.params.id;
    let sendData = {
      id:id
    };
    let data = service.getProjects( sendData );
    // console.log(data);
    this.setState({
      "type": data.type,
      "title": data.title,
      "href": data.href,
      "images": data.images,
      "intro": data.intro,
      "id": data.id
    });
  }
  render(){
    return(
      <div className='Projects_detail'>
        <h1>{this.state.title}</h1>
        {
          this.state.intro.map((v,i)=>{
            return <p key={i} className='intro'>{v}</p>
          })
        }
        {
          this.state.images.map((v,i)=>{
            return <img key={i} src={v} />
          })
        }
      </div>

    );
  }
}


