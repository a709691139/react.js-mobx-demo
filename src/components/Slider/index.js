import React, {
  Component
} from 'react';
import {
  observer
} from 'mobx-react';
import "./style.scss";

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  componentDidMount() {}
  componentWillUnmount() {

  }
  render() {
    return (
      <div className='SliderComponent'>
        <ul className='slideBox'>
          <li>
            <img src='http://i1.piimg.com/593933/b920a4dabbf32fbbs.png' />
          </li>
          <li>
            <img src='http://i1.piimg.com/593933/b920a4dabbf32fbbs.png' />
          </li>
          <li>
            <img src='http://i1.piimg.com/593933/b920a4dabbf32fbbs.png' />
          </li>
        </ul>
        <ul className='point'>
        </ul>
      </div>

    );
  }
}