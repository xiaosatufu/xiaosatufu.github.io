import{_ as s,v as n,b as a,R as l}from"./chunks/framework.db3115df.js";const i=JSON.parse('{"title":"Flutter","description":"","frontmatter":{},"headers":[],"relativePath":"articles/Flutter/index.md","filePath":"articles/Flutter/index.md"}'),p={name:"articles/Flutter/index.md"},o=l(`<h1 id="flutter" tabindex="-1">Flutter <a class="header-anchor" href="#flutter" aria-label="Permalink to &quot;Flutter&quot;">​</a></h1><h2 id="手势-gesturedetector" tabindex="-1">手势 GestureDetector <a class="header-anchor" href="#手势-gesturedetector" aria-label="Permalink to &quot;手势 GestureDetector&quot;">​</a></h2><ul><li>常用的几个手势</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">GestureDetector</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  onTap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_printMsg</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;点击&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onDoubleTap</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_printMsg</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;双击&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onLongPress</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_printMsg</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;长按&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onTapCancel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> () </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_printMsg</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;取消&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onTapUp</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (e) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_printMsg</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;松开&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  onTapDown</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (e) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">_printMsg</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;按下&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Container</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    decoration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BoxDecoration</span><span style="color:#A6ACCD;">(color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Colors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">redAccent)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">100</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><ul><li>拖动手势</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Stack</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">  children</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Widget</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">Positioned</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">      top</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> top</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      left</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> left</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GestureDetector</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">        onPanDown</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (</span><span style="color:#FFCB6B;">DragDownDetails</span><span style="color:#A6ACCD;"> e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;">//打印手指按下的位置</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;手指按下：\${</span><span style="color:#A6ACCD;font-style:italic;">e</span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;font-style:italic;">globalPosition</span><span style="color:#C3E88D;">}&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#676E95;font-style:italic;">//手指滑动</span></span>
<span class="line"><span style="color:#A6ACCD;">        onPanUpdate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (</span><span style="color:#FFCB6B;">DragUpdateDetails</span><span style="color:#A6ACCD;"> e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#82AAFF;">setState</span><span style="color:#A6ACCD;">(() {</span></span>
<span class="line"><span style="color:#A6ACCD;">            left </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">delta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dx</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">            top </span><span style="color:#89DDFF;">+=</span><span style="color:#A6ACCD;"> e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">delta</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">dy</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">          })</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        onPanEnd</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (</span><span style="color:#FFCB6B;">DragEndDetails</span><span style="color:#A6ACCD;"> e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#676E95;font-style:italic;">//打印滑动结束时在x、y轴上的速度</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">velocity)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Container</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">          width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">72</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          height</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">72</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">          decoration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BoxDecoration</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">            color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Colors</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">blueAccent</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            borderRadius</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BorderRadius</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">circular</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">36</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">          )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    )</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><ul><li>缩放手势</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Center</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;"> child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">GestureDetector</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">   child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Container</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">//使用OverflowBox可以让子组件宽高超过父组件</span></span>
<span class="line"><span style="color:#A6ACCD;">     child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">OverflowBox</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">       maxWidth</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2000.0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">       child</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Image</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">network</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">           </span><span style="color:#C3E88D;">&quot;https://upload-images.jianshu.io/upload_images/10992781-a64bd14d27699266.png?imageMogr2/auto-orient/strip|imageView2/2/w/800/format/webp&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">           width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> width)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">     )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">   onScaleUpdate</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> (</span><span style="color:#FFCB6B;">ScaleUpdateDetails</span><span style="color:#A6ACCD;"> e) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     </span><span style="color:#82AAFF;">setState</span><span style="color:#A6ACCD;">(() {</span></span>
<span class="line"><span style="color:#A6ACCD;">       </span><span style="color:#676E95;font-style:italic;">//缩放倍数在0.8到10倍之间</span></span>
<span class="line"><span style="color:#A6ACCD;">       width </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">200</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> e</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">scale</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clamp</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0.8</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">10</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">     })</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;"> )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span></span></code></pre></div><h2 id="websocket" tabindex="-1">webSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;webSocket&quot;">​</a></h2><ul><li>添加依赖</li></ul><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#pubspec.yaml</span></span>
<span class="line"><span style="color:#F07178;">dependencies</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">web_socket_channel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">^2.4.0</span></span></code></pre></div><ul><li>使用</li></ul><div class="language-dart"><button title="Copy Code" class="copy"></button><span class="lang">dart</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:web_socket_channel/io.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:web_socket_channel/web_socket_channel.dart&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">&#39;package:web_socket_channel/status.dart&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">as</span><span style="color:#A6ACCD;"> status</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">late</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IOWebSocketChannel</span><span style="color:#A6ACCD;"> _webSocketChannel</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">initConnect</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  _webSocketChannel </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IOWebSocketChannel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;ws://ip:port&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">querySceneList</span><span style="color:#A6ACCD;">(token)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  _webSocketChannel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">stream</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">onData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> onError</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> onError</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> onDone</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> onDone)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//  请求场景列表</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">querySceneList</span><span style="color:#A6ACCD;">(token) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;ws：请求场景列表 token:\${</span><span style="color:#A6ACCD;font-style:italic;">token</span><span style="color:#C3E88D;">}&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  _webSocketChannel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sink</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&#39;{&quot;client_type&quot;: &quot;app&quot;, &quot;token&quot;: &quot;\${</span><span style="color:#A6ACCD;font-style:italic;">token</span><span style="color:#C3E88D;">}&quot;, &quot;type&quot;: &quot;list&quot;}&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 切换场景</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">changeScene</span><span style="color:#A6ACCD;">(token</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> id) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;ws：切换场景&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  _webSocketChannel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sink</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">&#39;{&quot;client_type&quot;: &quot;app&quot;, &quot;token&quot;: &quot;\${</span><span style="color:#A6ACCD;font-style:italic;">token</span><span style="color:#C3E88D;">}&quot;, &quot;type&quot;: &quot;change&quot;,&quot;id&quot;:&quot;\${</span><span style="color:#A6ACCD;font-style:italic;">id</span><span style="color:#C3E88D;">}&quot;}&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 断连，然后执行重连</span></span>
<span class="line"><span style="color:#82AAFF;">onDone</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">debugPrint</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;ws:Socket is closed&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  _webSocketChannel </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">IOWebSocketChannel</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">connect</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;ws://119.3.27.227:9505&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  _webSocketChannel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">stream</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">listen</span><span style="color:#A6ACCD;">(this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">onData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> onError</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> onError</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> onDone</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> onDone)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  (() </span><span style="color:#89DDFF;font-style:italic;">async</span><span style="color:#A6ACCD;"> {})</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 错误日志</span></span>
<span class="line"><span style="color:#82AAFF;">onError</span><span style="color:#A6ACCD;">(err) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">debugPrint</span><span style="color:#A6ACCD;">(err</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">runtimeType</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#A6ACCD;">())</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">WebSocketChannelException</span><span style="color:#A6ACCD;"> ex </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> err</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">debugPrint</span><span style="color:#A6ACCD;">(ex</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">message)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 接受数据，数据json字符串，然后转成Map</span></span>
<span class="line"><span style="color:#82AAFF;">onData</span><span style="color:#A6ACCD;">(event) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">print</span><span style="color:#A6ACCD;">(</span><span style="color:#C3E88D;">&quot;ws:\${</span><span style="color:#A6ACCD;font-style:italic;">json</span><span style="color:#C3E88D;">.</span><span style="color:#82AAFF;">decode</span><span style="color:#C3E88D;">(</span><span style="color:#A6ACCD;font-style:italic;">event</span><span style="color:#C3E88D;">)}&quot;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> json</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">decode</span><span style="color:#A6ACCD;">(event)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> (result[</span><span style="color:#C3E88D;">&#39;code&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#89DDFF;">==</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">setState</span><span style="color:#A6ACCD;">(() {</span></span>
<span class="line"><span style="color:#A6ACCD;">      _sceneListStreamController</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">add</span><span style="color:#A6ACCD;">(result[</span><span style="color:#C3E88D;">&#39;data&#39;</span><span style="color:#A6ACCD;">])</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">      sceneList </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> result[</span><span style="color:#C3E88D;">&#39;data&#39;</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    })</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">@override</span></span>
<span class="line"><span style="color:#C792EA;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">dispose</span><span style="color:#A6ACCD;">() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  super</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">dispose</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// 判断websocket 是否连接 如果连接则断开</span></span>
<span class="line"><span style="color:#A6ACCD;">  _webSocketChannel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sink</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#A6ACCD;">(status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">goingAway)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  _webSocketChannel</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">sink</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">close</span><span style="color:#A6ACCD;">(status</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">normalClosure)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div>`,13),e=[o];function t(c,r,C,D,A,y){return n(),a("div",null,e)}const u=s(p,[["render",t]]);export{i as __pageData,u as default};