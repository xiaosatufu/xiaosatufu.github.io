## 加载 jQuery

1.坚持使用 CDN 来加载 jQuery，这种别人服务器免费帮你托管文件的便宜干嘛不占呢。点击查看使用 CDN 的好处，点此查看一些主流的 jQuery CDN 地址。

```html
<script
  type="text/javascript"
  src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"
></script>

<script>
  window.jQuery ||
    document.write(
      '<script src="js/jquery-1.11.0.min.js" type="text/javascript"><\/script>',
    );
</script>
```

2.安全起见，最好还是提供一个本地备份以便在无法从远程 CDN 服务器获取 jQuery 时网站也能工作，如上面代码所示。详情见此。

3.使用裸协议的 URL（也就是说去掉 http:或者 https:），如上面代码展示的那样。

4.如果可能，尽量将你的 JavaScript 和 jQuery 代码放到页面底部。详情移步这里，或者查看一个 HTML5 页面标准模板。

5.该使用哪个版本？

如果你想兼容 IE678 请表用 2.x 的版本
针对极少数不用考虑兼容性的幸运儿，极力推荐使用最新版本的 jQuery
当从 CDN 服务器加载 jQuery 时，最好把版本写全（比如 1.11.0 而不是 1.11 或者直接写个 1）
千万莫重复加载 6.如果你同时还使用了其他 JS 框架诸如 Prototype, MooTools, Zepto 云云，因为他们也使用了$符号，所以你就表再用美刀符号来进行jQuery 编码了，而请用'jQuery'代替。并且调用$.noConflict()保证不会有冲突出现。

7.要检测浏览器对一些新特性是否支持，请用 Modernizr。插播广告：论为毛不检测浏览器

关于变量
1.jQuery 类型的变量最好加个$前缀。

2.时常将 jQuery 选择器返回的内容存进变量以便重用

```js
var $products = $("div.products"); // 慢
var $products = $(".products"); // 快
```

3.使用驼峰命名

关于选择器 1.尽量 ID 选择器。其背后机理其实是调用原生的 document.getElementById()，所以速度较其他选择器快。

2.使用类选择器时表指定元素的类型。不信你看这个性能比较

```js
var $products = $("div.products"); // 慢
var $products = $(".products"); // 快
```

3.ID 父亲容器下面再查找子元素请用.find()方法。这样做快的原因是通过 id 选择元素不会使用 Sizzle 引擎。详情看这里

4.多级查找中，右边尽量指定得详细点而左边则尽量简单点。了解更多

```js
// 丑陋
$("div.data .gonzalez");

// 优化后
$(".data td.gonzalez");
```

5.避免冗余。详情或者查看性能比较

```js
$(".data table.attendees td.gonzalez");

// 好的方式：去掉了中间的冗余
$(".data td.gonzalez");
```

6.指定选择的上下文。

```js
// 劣质的代码：因为需要遍历整个DOM来找到.class
$(".class");

// 高品代码：因为只需在指定容器范围内进行查找
$(".class", "#class-container");
```

7.表使用万能选择器。查看具体阐释

```js
$("div.container > *"); // 差
$("div.container").children(); // 棒
```

8.警惕隐式的万能选择器。省略的情况下其实使用的就是\*号通配符。更多信息

```js
$("div.someclass :radio"); // 差
$("div.someclass input:radio"); // 棒
```

9.ID 已经表示唯一了，背后使用的是 document.getElementById()，所以表跟其他选择器混搭了。

```js
$("#outer #inner"); // 脏
$("div#inner"); // 乱
$(".outer-container #inner"); // 差
$("#inner"); // 干净利落，后台只需调用document.getElementById()
```

## DOM 操作相关;

1.操作任何元素前先将其从文档卸载，完了再贴回去。这事儿还能说细点

```js
var $myList = $("#list-container > ul").detach();
//...一大堆对$myList的处理
$myList.appendTo("#list-container");
```

2.代码里将 HTML 组织好后再一次性贴到 DOM 中去。具体来说，性能比较

```js
// 这样不好
var $myList = $("#list");
for (var i = 0; i < 10000; i++) {
  $myList.append("<li>" + i + "</li>");
}

// 这样好
var $myList = $("#list");
var list = "";
for (var i = 0; i < 10000; i++) {
  list += "<li>" + i + "</li>";
}
$myList.html(list);

// 但这样更好
var array = [];
for (var i = 0; i < 10000; i++) {
  array[i] = "<li>" + i + "</li>";
}
$myList.html(array.join(""));
```

3.不要处理不存在的元素。详情

```js
// 无良的做法：jQuery后台要跑完三个函数后才会知道这个元素其实根本不存在
$("#nosuchthing").slideUp();
// 应该这样
var $mySelection = $("#nosuchthing");
if ($mySelection.length) {
  $mySelection.slideUp();
}
```

## 事件相关

1.一个页面只写一个文档 ready 事件的处理程序。这样代码既清晰好调试，又容易跟踪代码的进程。

2.表用匿名函数来做事件的回调。匿名函数不易调试维护测试和复用。或许你想较真，看看这里吧

```js
$("#myLink").on("click", function(){...}); // 表这样

// 这样
function myLinkClickHandler(){...}
$("#myLink").on("click", myLinkClickHandler);
```

3.处理文档 ready 事件的回调也表用匿名函数，匿名函数不易调试维护测试和复用:

```js
$(function(){ ... }); // 糟糕的做法：无法利用此函数也无法为其写测试用例

// 好的做法
$(initPage); // 抑或 $(document).ready(initPage);
function initPage(){
    // 这里你可以进行程序的初始化了
}
```

4.进一步，最好也将 ready 事件的处理程序放到外部文件中引入到页面，而页面中内嵌的代码只需调用即可。

```html
<script src="my-document-ready.js"></script>
<script>
  // 初始化一些必要的全局变量
  $(document).ready(initPage); // 抑或 $(initPage);
</script>
```

5.千万表写内联到 HTML 的 JS 代码，这是调试的梦魇！应该总是用 jQuery 来绑定事件自带程序，这样也方便随时动态地取消绑定。

```html
<a id="myLink" href="#" onclick="myEventHandler();">my link</a>
<!--不好 -->
$("#myLink").on("click", myEventHandler); // GOOD
```

6.如果可能尽量在绑定事件处理程序时使用一个命名空间，这样可以方便地取消绑定而不会影响其他绑定。

```js
$("#myLink").on("click.mySpecialClick", myEventHandler); // 不错
// 之后，让我们优雅地解除绑定
$("#myLink").unbind("click.mySpecialClick");
```

异步操作 1.直接用$.ajax()而表去用.getJson() 或 .get(),因为 jQuery 内部还是将其转为前者

2.表对 HTTPS 站点使用 HTTP 去发起请求，最好干脆就表指定（将 HTTP 或者 HTTPS 从你的 URL 中移除）

3.表在链接里面嵌参数，请使用专门的参数设置来传递

```js
// 不易阅读的代码...
$.ajax({
    url: "something.php?param1=test1&param2=test2",
    ....
});

// 更易阅读...
$.ajax({
    url: "something.php",
    data: { param1: test1, param2: test2 }
});
```

4.尽量指明数据类型以便你自己清楚要处理什么样的数据（见下方会提到的 Ajax 模板）

5.对于异步动态加载的内容，最好使用代理来绑定事件处理程序。这样的好处是对于之后动态加载的元素事件同样有效。你或许想了解更多

```js
$("#parent-container").on("click", "a", delegatedClickHandlerForAjax);
```

6.使用 Promise 模式。更多例子

```js
$.ajax({ ... }).then(successHandler, failureHandler);

// 抑或
var jqxhr = $.ajax({ ... });
jqxhr.done(successHandler);
jqxhr.fail(failureHandler);
```

7.标准的 Ajax 模板一分。追寻根源

```js
var jqxhr = $.ajax({
  url: url,
  type: "GET", // 默认为GET,你可以根据需要更改
  cache: true, // 默认为true,但对于script,jsonp类型为false,可以自行设置
  data: {}, // 将请求参数放这里.
  dataType: "json", // 指定想要的数据类型
  jsonp: "callback", // 指定回调处理JSONP类型的请求
  statusCode: {
    // 如果你想处理各状态的错误的话
    404: handler404,
    500: handler500,
  },
});
jqxhr.done(successHandler);
jqxhr.fail(failureHandler);
```

动画与特效 1.保持一个始终如一风格统一的动画实现

2.紧遵用户体验，表滥用动画特效

使用简洁的显示隐藏，状态切换，滑入滑出等效果来展示元素
使用预设值来设置动画的速度'fast'，'slow'，或者 400（中等速度）
插件相关

1.始终选择一个有良好支持，完善文档，全面测试过并且社区活跃的插件

2.注意所用插件与当前使用的 jQuery 版本是否兼容

3.一些常用功能应该写成 jQuery 插件。一分 jQuery 插件的编写模板

链式句法 1.除了用变量将 jQuery 选择器返回的结果保存，还可以利用好链式调用。

```js
$("#myDiv").addClass("error").show();
```

2.当链式调用多达 3 次以上或代码因绑定回调略显复杂时，使用换行和适当的缩进来提高代码的可读性。

```js
$("#myLink")
  .addClass("bold")
  .on("click", myClickHandler)
  .on("mouseover", myMouseOverHandler)
  .show();
```

3.对于特别长的调用最好还是用变量保存下中间结果来简化代码。

其他 1.使用对象字面量来传递参数

```js
$myLink.attr("href", "#").attr("title", "my link").attr("rel", "external"); // 糟糕：调用了三次attr
// 不错，只调用了一次attr
$myLink.attr({
  href: "#",
  title: "my link",
  rel: "external",
});
```

2.表将 CSS 与 jQuery 杂揉

```js
$("#mydiv").css({'color':red, 'font-weight':'bold'}); // 不好
.error {/* 不错 */
    color: red;
    font-weight: bold;
}
$("#mydiv").addClass("error");
```

3.时刻关注官方 Changelog，表使用摒弃了的方法。点此查看所有废弃的方法

4.适时地使用原生 JavaScript。一些与此有关的性能比较

```js
$("#myId"); // 多少还是会逊色于...
document.getElementById("myId");
```
