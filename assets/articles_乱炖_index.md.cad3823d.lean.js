import{_ as s,v as a,b as n,R as l}from"./chunks/framework.db3115df.js";const u=JSON.parse('{"title":"奇奇怪怪的知识","description":"","frontmatter":{},"headers":[],"relativePath":"articles/乱炖/index.md","filePath":"articles/乱炖/index.md"}'),e={name:"articles/乱炖/index.md"},t=l(`<h1 id="奇奇怪怪的知识" tabindex="-1">奇奇怪怪的知识 <a class="header-anchor" href="#奇奇怪怪的知识" aria-label="Permalink to &quot;奇奇怪怪的知识&quot;">​</a></h1><h2 id="tpl-使用" tabindex="-1">TPL 使用 <a class="header-anchor" href="#tpl-使用" aria-label="Permalink to &quot;TPL 使用&quot;">​</a></h2><ul><li>github 地址：<a href="https://github.com/iyear/tdl" target="_blank" rel="noreferrer">https://github.com/iyear/tdl</a></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">正确格式</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">//创建命名空间</span></span>
<span class="line"><span style="color:#A6ACCD;">tdl -n 名称</span></span>
<span class="line"><span style="color:#A6ACCD;">//拿到桌面 tdata 文件夹中的数据绑定到 Namespace（相当于登录了）</span></span>
<span class="line"><span style="color:#A6ACCD;">tdl login -n name -d &quot;D:\\Telegram Desktop\\tdata&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">网络无响应，要添加上代理（端口为梯子软件里设置的端口）</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">tdl dl -n name -u xxx --proxy socks5://localhost:xxxx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">E:\\bin&gt;tdl dl -n kunkka -u https://t.me/c/1118018620/2499 --proxy socks5://localhost:7890</span></span></code></pre></div>`,4),p=[t];function o(c,r,i,d,h,C){return a(),n("div",null,p)}const m=s(e,[["render",o]]);export{u as __pageData,m as default};
