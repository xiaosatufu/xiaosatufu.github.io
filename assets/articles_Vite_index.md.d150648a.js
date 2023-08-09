import{_ as s,v as a,b as n,R as e}from"./chunks/framework.f154aae1.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Vite/index.md","filePath":"articles/Vite/index.md"}'),p={name:"articles/Vite/index.md"},l=e(`<p>#Vite</p><h3 id="创建命令" tabindex="-1">创建命令 <a class="header-anchor" href="#创建命令" aria-label="Permalink to &quot;创建命令&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;"># 使用 npm</span></span>
<span class="line"><span style="color:#A6ACCD;">npm create vite@latest</span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 yarn</span></span>
<span class="line"><span style="color:#A6ACCD;">yarn create vite</span></span>
<span class="line"><span style="color:#A6ACCD;"># 使用 pnpm</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm create vite</span></span></code></pre></div><h3 id="深度修改样式" tabindex="-1">深度修改样式 <a class="header-anchor" href="#深度修改样式" aria-label="Permalink to &quot;深度修改样式&quot;">​</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">:deep(.van-search) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  flex: 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h3 id="代理配置" tabindex="-1">代理配置 <a class="header-anchor" href="#代理配置" aria-label="Permalink to &quot;代理配置&quot;">​</a></h3><p>vite.config.js</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import vue from &#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [vue()],</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 配置代理</span></span>
<span class="line"><span style="color:#A6ACCD;">  server:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    proxy:{</span></span>
<span class="line"><span style="color:#A6ACCD;">      // https://i.maoyan.com</span></span>
<span class="line"><span style="color:#A6ACCD;">      &#39;/path&#39;:{</span></span>
<span class="line"><span style="color:#A6ACCD;">        target:&#39;https://i.maoyan.com&#39;,//替换的服务端地址</span></span>
<span class="line"><span style="color:#A6ACCD;">        changeOrigin:true,//开启代理，允许跨域</span></span>
<span class="line"><span style="color:#A6ACCD;">        rewrite:path=&gt;path.replace(/^\\/path/,&#39;&#39;) // 设置重写的路径</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span></code></pre></div>`,8),t=[l];function o(c,i,r,C,A,d){return a(),n("div",null,t)}const m=s(p,[["render",o]]);export{y as __pageData,m as default};
