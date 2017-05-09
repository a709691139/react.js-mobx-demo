import React, {
  Component
} from 'react';
// import  './style.scss';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className='Contact'>
        <ul>
          <li><i className='ion-ios-telephone'></i> : <p>15992690565</p></li>
          <li><i className='ion-ios-email'></i> : <p>709691139@qq.com</p></li>
        </ul>
        <div className='btnBox'>
          <a className='btn' href="http://wpa.qq.com/msgrd?v=3&uin=709691139&site=qq&menu=yes" target="_blank">点击qq聊天 </a>
        </div>  
      </div>
    );
  }
}

export default Contact;