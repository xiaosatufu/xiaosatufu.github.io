# Vue 组件

### Video.js

> Video.js 是一个有着 HTML5 背景的网络视频播放器。它同时支持 HTM5 和 Flash 视频，简单来说就是 HTMl5 和 Flash 视频播放器

- 安装

```
pnpm add video.js --save
```

- 实现

```
<script setup>
import { onMounted, onUnmounted, ref } from "vue"
import videojs from "video.js"
import "video.js/dist/video-js.css"

const videoPlayer = ref(null)

const myPlayer = ref(null)

onMounted(() => {
  myPlayer.value = videojs(videoPlayer.value, {
    poster: "//vjs.zencdn.net/v/oceans.png",
    controls: true,
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: 'video/mp4',
      }
    ],
    controlBar: {
      remainingTimeDisplay: {
        displayNegative: false
      }
    },
    playbackRates: [0.5, 1, 1.5, 2]
  }, () => {
    myPlayer.value.log("play.....")
  })
})

onUnmounted(() => {
  if (myPlayer.value) {
    myPlayer.value.dispose()
  }
})


</script>

<template>
  <div>
    <video ref="videoPlayer" class="video-js" style="margin: auto auto"></video>
  </div>
</template>


```
