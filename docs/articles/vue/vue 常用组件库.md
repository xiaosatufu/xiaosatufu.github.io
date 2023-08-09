# Vue 组件

## Video.js

> Video.js 是一个有着 HTML5 背景的网络视频播放器。它同时支持 HTM5 和 Flash 视频，简单来说就是 HTMl5 和 Flash 视频播放器

- 安装

```js
pnpm add video.js --save
```

- 实现

```vue
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const videoPlayer = ref(null);

const myPlayer = ref(null);

onMounted(() => {
  myPlayer.value = videojs(
    videoPlayer.value,
    {
      poster: "//vjs.zencdn.net/v/oceans.png",
      controls: true,
      sources: [
        {
          src: "//vjs.zencdn.net/v/oceans.mp4",
          type: "video/mp4",
        },
      ],
      controlBar: {
        remainingTimeDisplay: {
          displayNegative: false,
        },
      },
      playbackRates: [0.5, 1, 1.5, 2],
    },
    () => {
      myPlayer.value.log("play.....");
    },
  );
});

onUnmounted(() => {
  if (myPlayer.value) {
    myPlayer.value.dispose();
  }
});
</script>

<template>
  <div>
    <video ref="videoPlayer" class="video-js" style="margin: auto auto"></video>
  </div>
</template>
```

## PDF.JS

pdf.js 官网地址：https://mozilla.github.io/pdf.js/getting_started/#download

将下载的 pdf 文件放入项目静态文件中，vue3.0 的话放入到 public 下，如果是 vue2.x 版本直接放在根目录的 static 下

使用

```html
<iframe
  :src="'/static/js/pdf/web/viewer.html?file=' + filePath"
  width="100%"
  height="100%"
></iframe>
```

## axios

### 使用 axios 如何取消重复请求

> axios 官网文档上取消请求的两种方式
> 使用 CancelToken.source 工厂创建一个取消令牌：

```js
var CancelToken = axios.CancelToken;
var source = CancelToken.source（）;
axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function(thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 处理错误
  }
});
//取消请求（消息参数是可选的）
source.cancel（'操作被用户取消。'）;
还可以通过将执行器函数传递给CancelToken构造函数来创建取消令牌：

var CancelToken = axios.CancelToken;
var cancel;

axios.get（'/ user / 12345'，{
   cancelToken：new CancelToken（function executor（c）{
     //一个执行器函数接收一个取消函数作为参数
     cancel = c;
   }）
}）;

// 取消请求
clear();
```

> 根据文档上的第二种方法，我们可以在拦截器里统一处理取消重复请求

```js
let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removePending = (config) => {
    for(let p in pending){
        if(pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
}

//添加请求拦截器
axios.interceptors.request.use(config=>{
     removePending(config); //在一个ajax发送前执行一下取消操作
     config.cancelToken = new cancelToken((c)=>{
        // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        pending.push({ u: config.url + '&' + config.method, f: c });
    });
     return config;
   }，error => {
     return Promise.reject(error);
   });

//添加响应拦截器
axios.interceptors.response.use(response=>{
      removePending(res.config);  //在一个ajax响应后再执行一下取消操作，把已经完成的请求从pending中移除
      return response;
   }，error =>{
      return { data: { } }; 返回一个空对象，主要是防止控制台报错
   });
```

> 效果
> 同一个请求，没有完成的请求将被取消

未完成的 ajax 被取消

利用这个方法，一方面可以防止重复点击不同页码导致的表格数据闪烁，另外可以做实时搜索，始终获取最新结果。
