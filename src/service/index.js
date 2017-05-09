
class Service {
  constructor() {}

  serialize(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }
  toQueryString(obj) { //转化 {a:1,b:2} => a=1&b=2
    var query = '',
      name, value, fullSubName, subName, subValue, innerObj, i;
    for (name in obj) {
      value = obj[name];
      if (value instanceof Array) {
        for (i = 0; i < value.length; ++i) {
          subValue = value[i];
          fullSubName = name + '[' + i + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      } else if (value instanceof Object) {
        for (subName in value) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += param(innerObj) + '&';
        }
      } else if (value !== undefined && value !== null)
        query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }
    return query.length ? query.substr(0, query.length - 1) : query;
  }

  getProjects(sendData) { //获取 视频列表
    let data = [
      {
        type:'native',
        title:'社区乐手机app',
        href:'http://www.shequle.net/web/index/app_sql',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['已上线，安卓和苹果，采用react-native 技术。','信息展示平台，用来展示企业的新闻信息，内有原生百度地图功能、gps定位、二维码扫码等功能。']
      },
      {
      	type:'native',
        title:'跳舞宝手机app@1.x',
        href:'http://www.shequle.net/web/index/app_twb',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['已上线，安卓和苹果，采用react-native 技术。','第一代版本是单纯的连接蓝牙，获取歌单列表，然后控制音响播放音乐，可编辑顺序。']
      },
      {
      	type:'native',
        title:'跳舞宝手机app@2.x',
        href:'http://www.shequle.net/web/index/app_twb',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['未上线，安卓和苹果，采用react native + mobx技术。','已完成了软件前端界面和功能实现，后端未完成。','功能：展示信息、扫码、搜索、手机本地音乐视频播放，管理下载的音乐和视频，蓝牙连接音响，门店地图搜索。']
      },
      {
      	type:'native',
        title:'健康中心app',
        href:'http://www.shequle.net/web/index/app_twb',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['已上线，安卓和苹果，采用react native + mobx技术。','主要用来获取用户健康数据，然后转成图表展示。']
      },
      {
      	type:'webApp',
        title:'社区乐后台数据展示网页app',
        href:'http://www.shequle.net/web/index/app_twb',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['已上线。采用angular@1.x + echarts 编写','分析数据，转化成图表']
      },
      {
      	type:'webApp',
        title:'商城手机网页app',
        href:'http://www.shequle.net/web/index/app_twb',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['已上线。采用angular@1.x + echarts 编写','分析数据，转化成图表']
      },
      {
      	type:'webApp',
        title:'社区乐手机网页app',
        href:'http://www.shequle.net/web/index/app_twb',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['未上线，采用angular@1.x + ionic框架。','已经太监的项目，改成rn版本了。 ']
      },
      {
      	type:'web',
        title:'社区乐展示网页h5',
        href:'http://www.shequle.net/web/index/app_twb',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['已上线，采用js 加 swiper插件。']
      },
      {
      	type:'webApp',
        title:'飞机射击大战h5',
        href:'http://www.709691139.win/plane',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['已上线，毕业设计，后端php','纯div版和canvas版都写过。','功能： 登录注册、关卡、商店、任务、排行榜、音乐、战斗、道具。']
      },
      {
      	type:'webApp',
        title:'请假查询app',
        href:'http://www.709691139.win/plane',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['个人项目，angular+inoic。']
      },
      {
      	type:'web',
        title:'旧版个人主页',
        href:'http://www.709691139.win/plane',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['个人项目，jquery+响应式开发。'],
      },
      {
      	type:'webApp',
        title:'gba口袋妖怪h5',
        href:'https://github.com/a709691139/Pokemon',
        images: ["https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=463506441,1682307747&fm=58"],
        intro:['个人项目，未完成版本(太监了)，纯原生js加canvas。','写的好累这玩意，图片资源什么都要百度，动画也麻烦，以后换个框架重写。'],
      },
    ];
    return data;
  }
}
const service = new Service();
export default service;