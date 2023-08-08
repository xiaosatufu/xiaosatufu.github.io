import{_ as s,v as n,b as a,R as l}from"./chunks/framework.5b8b640e.js";const d=JSON.parse('{"title":"Vue 组件","description":"","frontmatter":{},"headers":[],"relativePath":"articles/vue/vue 常用组件库.md","filePath":"articles/vue/vue 常用组件库.md"}'),e={name:"articles/vue/vue 常用组件库.md"},p=l(`<h1 id="vue-组件" tabindex="-1">Vue 组件 <a class="header-anchor" href="#vue-组件" aria-label="Permalink to &quot;Vue 组件&quot;">​</a></h1><h3 id="video-js" tabindex="-1">Video.js <a class="header-anchor" href="#video-js" aria-label="Permalink to &quot;Video.js&quot;">​</a></h3><blockquote><p>Video.js 是一个有着 HTML5 背景的网络视频播放器。它同时支持 HTM5 和 Flash 视频，简单来说就是 HTMl5 和 Flash 视频播放器</p></blockquote><ul><li>安装</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm add video.js --save</span></span></code></pre></div><ul><li>实现</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { onMounted, onUnmounted, ref } from &quot;vue&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">import videojs from &quot;video.js&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &quot;video.js/dist/video-js.css&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const videoPlayer = ref(null)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const myPlayer = ref(null)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">onMounted(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  myPlayer.value = videojs(videoPlayer.value, {</span></span>
<span class="line"><span style="color:#A6ACCD;">    poster: &quot;//vjs.zencdn.net/v/oceans.png&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    controls: true,</span></span>
<span class="line"><span style="color:#A6ACCD;">    sources: [</span></span>
<span class="line"><span style="color:#A6ACCD;">      {</span></span>
<span class="line"><span style="color:#A6ACCD;">        src: &quot;//vjs.zencdn.net/v/oceans.mp4&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        type: &#39;video/mp4&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    ],</span></span>
<span class="line"><span style="color:#A6ACCD;">    controlBar: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      remainingTimeDisplay: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        displayNegative: false</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    playbackRates: [0.5, 1, 1.5, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }, () =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">    myPlayer.value.log(&quot;play.....&quot;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">onUnmounted(() =&gt; {</span></span>
<span class="line"><span style="color:#A6ACCD;">  if (myPlayer.value) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    myPlayer.value.dispose()</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;template&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;video ref=&quot;videoPlayer&quot; class=&quot;video-js&quot; style=&quot;margin: auto auto&quot;&gt;&lt;/video&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  &lt;/div&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/template&gt;</span></span></code></pre></div>`,7),o=[p];function t(c,i,r,C,A,u){return n(),a("div",null,o)}const D=s(e,[["render",t]]);export{d as __pageData,D as default};
