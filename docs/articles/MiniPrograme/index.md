# 微信小程序

## 获取用户授权

```js
wx.getUserProfile({
  desc: "desc",
  success: (res) => {
    console.log(res);
  },
});
```

## wx-minxin 实现

1. 新建 wx-mixins.js 文件放置于项目根目录

```javascript
//根目录新建 wx-mixins.js
// 保存原始的 Page
const originPage = Page;

// 重新定义 Page
Page = (options) => {
  // 处理 mixins
  const mixins = options.mixins;
  if (Array.isArray(mixins)) {
    options = mergeOptions(mixins, options);
    delete options.mixins;
  } // 执行原始的 Page
  originPage(options);
};

const pageHooks = [
  "onLoad",
  "onShow",
  "onReady",
  "onHide",
  "onUnload",
  "onPullDownRefresh",
  "onReachBottom",
  "onShareAppMessage",
  "onPageScroll",
  "onResize",
  "onTabItemTap",
];

const hasOwnProperty = Object.prototype.hasOwnProperty;
const toString = Object.prototype.toString;

function toRawType(value) {
  return toString.call(value).slice(8, -1);
}

function isPlainObject(value) {
  return toRawType(value) === "Object";
}

function isFunction(value) {
  return toRawType(value) === "Function";
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function mergeOptions(mixins, options) {
  mixins.forEach((mixin) => {
    if (!isPlainObject(mixin)) {
      throw new Error("typeof mixin must be plain object");
    } // 支持混入对象中嵌套混入对象，递归处理

    if (mixin.mixins) {
      mixin = mergeOptions(mixin.mixins, mixin, hooks);
    } // 处理混入对象的每一个值, 可能是生命周期函数、可能是对象、也可能是方法

    for (const key in mixin) {
      // 暂存页面中原始的值
      const originValue = options[key]; // 暂存混入对象的值
      const mixinValue = mixin[key]; // 处理混入对象的生命周期函数

      if (pageHooks.includes(key)) {
        if (!isFunction(mixinValue)) {
          throw new Error(`typeof ${key} must be function`);
        } // 重写页面中对应的生命周期函数
        options[key] = function () {
          let res; // 先执行混入对象的生命周期函数
          res = mixinValue.apply(this, arguments); // 页面中定义了同名的生命周期函数，后执行
          if (originValue) res = originValue.apply(this, arguments);
          return res;
        };
      } // 处理混入对象，值可能是 data
      else if (isPlainObject(mixinValue)) {
        options[key] = {
          ...mixinValue,
          ...originValue,
        };
      } // 处理混入对象的属性或方法
      else {
        // 页面中不存在同名的属性或方法，才使用混入对象的属性或方法
        if (!hasOwn(options, key)) {
          options[key] = mixinValue;
        }
      }
    }
  });

  return options;
}
```

2. app.js 引入此文件

```javascript
///app.js
require("./wx-mixins");
```

3. 新建 mixins 文件夹，将需要使用的 mixin 文件新建在此文件夹内

```js
// /mixins/queryParamsMixin.js
//.eg
module.exports = {
  data: {
    pageNum: 1,
    totalSize: 0,
    params: null,
    list: [],
  },
  onLoad() {
    this.setData({
      params: {
        pageNum: 1,
        pageSize: 10,
      },
    });
  },
  onReachBottom: function () {
    //判断是否到达底部
    if (this.data.totalSize == this.data.list.length) return;
    let pageNum = this.data.params.pageNum + 1;
    this.setData({
      ["params.pageNum"]: pageNum,
    });
    this.loadList();
  },
  onShow: function () {},
};
```

4. 在所需要的此 mixin 的页面引入

```js
Page({
  mixins: [require("../../mixins/queryParamsMixin")],
});
```

## 微信小程序的跨页面通信

1. 新建 onfire.min.js

```js
/ /libs/onfire.min.js
!function(n,t){"object"==typeof module&&module.exports?module.exports=t():n.onfire=t()}("undefined"!=typeof window?window:this,function(){function n(n,t,e,o){if(typeof n!==p||typeof t!==a)throw new Error("args: "+p+", "+a);return y(l,n)||(l[n]={}),l[n][++d]=[t,e,o],[n,d]}function t(n,t){for(var e in n)y(n,e)&&t(e,n[e])}function e(t,e,o){return n(t,e,0,o)}function o(t,e,o){return n(t,e,1,o)}function i(n,e){y(l,n)&&t(l[n],function(t,o){o[0].apply(o[2],e),o[1]&&delete l[n][t]})}function r(n){var t=s(arguments,1);setTimeout(function(){i(n,t)})}function u(n){i(n,s(arguments,1))}function f(n){var e,o,i=!1,r=typeof n;return r===p?!!y(l,n)&&(delete l[n],!0):"object"===r?(e=n[0],o=n[1],!(!y(l,e)||!y(l[e],o))&&(delete l[e][o],!0)):r!==a||(t(l,function(e,o){t(o,function(t,o){o[0]===n&&(delete l[e][t],i=!0)})}),i)}function c(){l={}}var l={},d=0,p="string",a="function",y=Function.call.bind(Object.hasOwnProperty),s=Function.call.bind(Array.prototype.slice);return{on:e,one:o,un:f,fire:r,fireSync:u,clear:c}});
```

2. 在所需要的页面引入

```js
const onfire = require('../../libs/onfire.min.js')
//发送事件
onfire.fire('EventPhoneChange', mobile)
//监听事件
onLoad: function () {
// 绑定事件，当名为EventPhoneChange的事件发生的时
    onfire.on('EventPhoneChange', e => {
        this.setData({
            mobile: e
        })
    })
}
//销毁事件
onUnload: function () {
    // 取消事件绑定
    onfire.un("EventPhoneChange");
}
```

3. 相关 api

- on(event_name, callback) 绑定事件，参数为 event_name 和 callback， 当有名字为 event_name 的事件发生的时候，callback 方法将会被执行。这个方法会返回一个 eventObj，这个可以用于使用 un(eventObj)方法来取消事件绑定。

- one(event_name, callback) 绑定（订阅）事件，参数为 event_name with callback. 当被触发一次之后失效。只能被触发一次，一次之后自动失效。

- fire(event_name, data) 触发名字为 event_name 的事件，并且赋予变量 data 为 callback 方法的输入值。

- un(eventObj / eventName / function)取消事件绑定。可以仅仅取消绑定一个事件回调方法，也可以直接取消全部的事件；

- clear() 清空所有事件

## 清除富文本种图片格式

```js
const formatRichText = (html) => {
  let newContent = html.replace(/<img[^>]*>/gi, function (match, capture) {
    match = match.replace(/style="[^"]+"/gi, "").replace(/style='[^']+'/gi, "");
    match = match.replace(/width="[^"]+"/gi, "").replace(/width='[^']+'/gi, "");
    match = match
      .replace(/height="[^"]+"/gi, "")
      .replace(/height='[^']+'/gi, "");
    return match;
  });
  newContent = newContent.replace(/style="[^"]+"/gi, function (match, capture) {
    match = match
      .replace(/width:[^;]+;/gi, "max-width:100%;")
      .replace(/width:[^;]+;/gi, "max-width:100%;");
    return match;
  });
  newContent = newContent.replace(/<br[^>]*\/>/gi, "");
  newContent = newContent.replace(
    /\<img/gi,
    '<img style="max-width:100%;height:auto;display:block;margin:10px 0;"',
  );
  return newContent;
};
```

## 随机生成 uid

```js
const guid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};
```

## 页面权限判定

```js
function loginCheck(pageObj) {
  if (pageObj.onLoad) {
    let _onLoad = pageObj.onLoad; // 使用onLoad的话需要传递options
    pageObj.onLoad = function (options) {
      if (wx.getStorageSync("token")) {
        // 获取当前页面
        let currentInstance = getPageInstance();
        _onLoad.call(currentInstance, options);
      } else {
        //跳转到登录页
        wx.redirectTo({
          url: "/pages/log/log",
        });
      }
    };
  }
  return pageObj;
}

// 获取当前页面
function getPageInstance() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}
exports.loginCheck = loginCheck;

//使用

let filter = require("../../utils/filter");
Page(filter.loginCheck({}));
```

## 接口封装

```javascript
//http/request.js
const { baseUrl } = require("./env").dev;

const { requestCommonParmas } = require("../utils/util");
module.exports = {
  request: function (url, method = "GET", data) {
    let fullUrl = `${baseUrl}${url}`;
    let token = wx.getStorageSync("token") ? wx.getStorageSync("token") : "";
    return new Promise((resolve, reject) => {
      wx.request({
        url: fullUrl,
        method,
        data: {
          ...requestCommonParmas,
          data,
        },
        header: {
          "context-type": "application/json",
          TOKEN: token,
        },
        success(res) {
          if (res.data.code == 500) {
            try {
              let whiteList = [
                "pages/mine/index",
                "pages/index/index",
                "pages/log/log",
              ];
              wx.clearStorageSync();
              let pages = getCurrentPages(),
                currPage;
              if (pages.length) {
                currPage = pages[pages.length - 1];
              }
              if (!whiteList.includes(currPage.route)) {
                wx.redirectTo({
                  url: "/pages/log/log",
                });
              }
            } catch (e) {
              // Do something when catch error
            }
          }
          resolve(res.data);
        },
        fail() {
          wx.showToast({
            title: "接口请求错误",
            icon: "none",
          });
          reject(res.data.message);
        },
      });
    });
  },
};

//http/env.js
module.exports = {
  dev: {
    baseUrl: "",
  },
  prod: {
    baseUrl: "",
  },
};

//api/xxx.js
const { request } = require("../http/request");
module.exports = {
  //最新活动列表
  getNewArticleList: (params) =>
    request("/home/getNewArticleList", "POST", params), //置顶列表
  getTopList: (params) => request("/home/getTopList", "POST", params),
};
```

## 数组 setdata 设置

```js
const actionColor = `${classify}Action[${index}].color`;
this.setData({
  [actionColor]: "#ee0a24",
});
```

## 组件样式额外设置

```js
Component({
    externalClasses: ['my-class']
})
// wxml
<view class="my-class">
// 使用
<component my-class="test-class" />
```

## 自定义 navigation

```js
// .js // component/navigation/index.js
const app = getApp() Component({
    externalClasses: ['my-class'],     
    /***组件的属性列表*/
    properties: {     },    
   /*** 组件的初始数据 */     
    data: {
     navBarHeight: app.globalData.navBarHeight, //导航栏高度
     menuRight: app.globalData.menuRight, // 胶囊距右方间距（方保持左、右间距一致）
     menuBotton: app.globalData.menuBotton,
     menuHeight: app.globalData.menuHeight     
    },    
     /***组件的方法列表 */     
    methods: {

    }
  }) // .wxml

<view class="nav my-class" style="height:{{navBarHeight}}px;">
    <view class="nav-main">
        <!-- 胶囊区域 -->
        <view
      class="capsule-box"
      style="height:{{menuHeight}}px; min-height:{{menuHeight}}px; line-height:{{menuHeight}}px; bottom:{{menuBotton}}px;">
          <!-- 导航内容区域 -->
            <slot></slot>     </view>
      </view>
</view>

// .wxss
.nav {   position: fixed;   top: 0;   left: 0;   width: 100vw; }
.nav-main {   width: 100%;   height: 100%;   position: relative; }
.nav .capsule-box {   position: absolute;   box-sizing: border-box;
  width: 100%; }
```
