# 移动端资源整理

## meta 基础知识

> H5 页面窗口自动调整到设备宽度，并禁止用户缩放页面

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
/>
```

> 忽略将页面中的数字识别为电话号码

```html
<meta name="format-detection" content="telephone=no" />
```

> 忽略 Android 平台中对邮箱地址的识别

```html
<meta name="format-detection" content="email=no" />
```

> 当网站添加到主屏幕快速启动方式，可隐藏地址栏，仅针对 ios 的 safari

```html
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- ios7.0版本以后，safari上已看不到效果 -->
```

> 将网站添加到主屏幕快速启动方式，仅针对 ios 的 safari 顶端状态条的样式

```html
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- 可选default、black、black-translucent -->
```

## viewport 模板

> viewport 模板——通用

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
      name="viewport"
    />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
    <meta content="telephone=no" name="format-detection" />
    <meta content="email=no" name="format-detection" />
    <title>标题</title>
    <link rel="stylesheet" href="index.css" />
  </head>

  <body>
    这里开始内容
  </body>
</html>
```

> viewport 模板 - target-densitydpi=device-dpi，android 2.3.5 以下版本不支持

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=750, user-scalable=no, target-densitydpi=device-dpi"
    />
    <!-- width取值与页面定义的宽度一致 -->
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
    <meta content="telephone=no" name="format-detection" />
    <meta content="email=no" name="format-detection" />
    <title>标题</title>
    <link rel="stylesheet" href="index.css" />
  </head>

  <body>
    这里开始内容
  </body>
</html>
```

## 常见问题

> 移动端如何定义字体 font-family

- 中文字体使用系统默认即可，英文用 Helvetica

```css
/* 移动端定义字体的代码 */
body {
  font-family: Helvetica;
}
```

[参考《移动端使用字体的思考》](http://www.cnblogs.com/PeunZhang/p/3592096.html)

> 移动端字体单位 font-size 选择 px 还是 rem

- 对于只需要适配少部分手机设备，且分辨率对页面影响不大的，使用 px 即可
- 对于需要适配各种移动设备，使用 rem，例如只需要适配 iPhone 和 iPad 等分辨率差别比较挺大的设备

```css
/* rem配置参考，适合视觉稿宽度为640px的：*/
<meta
  content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
  name="viewport"
  > html {
  font-size: 10px;
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  html {
    font-size: 11px;
  }
}
@media screen and (min-width: 376px) and (max-width: 414px) {
  html {
    font-size: 12px;
  }
}
@media screen and (min-width: 415px) and (max-width: 639px) {
  html {
    font-size: 15px;
  }
}
@media screen and (min-width: 640px) and (max-width: 719px) {
  html {
    font-size: 20px;
  }
}
@media screen and (min-width: 720px) and (max-width: 749px) {
  html {
    font-size: 22.5px;
  }
}
@media screen and (min-width: 750px) and (max-width: 799px) {
  html {
    font-size: 23.5px;
  }
}
@media screen and (min-width: 800px) {
  html {
    font-size: 25px;
  }
}
```

> ios 系统中元素被触摸时产生的半透明灰色遮罩怎么去掉

- ios 用户点击一个链接，会出现一个半透明灰色遮罩, 如果想要禁用，可设置-webkit-tap-highlight-color 的 alpha 值为 0，也就是属性值的最后一位设置为 0 就可以去除半透明灰色遮罩

```css
a,
button,
input,
textarea {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0;);
}
```

> 部分 android 系统中元素被点击时产生的边框怎么去掉

- android 用户点击一个链接，会出现一个边框或者半透明灰色遮罩, 不同生产商定义出来额效果不一样，可设置-webkit-tap-highlight-color 的 alpha 值为 0 去除部分机器自带的效果

```css
a,button,input,textarea{
-webkit-tap-highlight-color: rgba(0,0,0,0;)
-webkit-user-modify:read-write-plaintext-only;
}
```

- webkit-user-modify 有个副作用，就是输入法不再能够输入多个字符

- 另外，有些机型去除不了，如小米 2

- 对于按钮类还有个办法，不使用 a 或者 input 标签，直接用 div 标签
  > webkit 表单元素的默认外观怎么重置
- 通用

```css
.css {
  -webkit-appearance: none;
}
```

- 伪元素改变 number 类型 input 框的默认样式

```css
input[type="number"]::-webkit-textfield-decoration-container {
  background-color: transparent;
}
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
```

> webkit 表单输入框 placeholder 的颜色值能改变么

```css
input::-webkit-input-placeholder {
  color: #aaaaaa;
}
input:focus::-webkit-input-placeholder {
  color: #eeeeee;
}
```

> 打电话发短信写邮件怎么实现

- 打电话

```css
<a href="tel:028-10086">打电话给:028-10086</a>
```

- 发短信，winphone 系统无效

```css
<a href="sms:10086">发短信给: 10086</a>
```

- 写邮件

```css
<a href="mailto:example@gamil.com">example@gmail.com</a>
```

> 模拟按钮 hover 效果

- 移动端触摸按钮的效果，可明示用户有些事情正要发生，是一个比较好体验，但是移动设备中并没有鼠标指针，使用 css 的 hover 并不能满足我们的需求，还好国外有个激活移动端 css 的 active 效果。
- 直接在 body 上添加 ontouchstart，同样可激活移动端 css 的 active 效果，比较推荐这种方式，代码如下：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
      name="viewport"
    />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
    <meta content="telephone=no" name="format-detection" />
    <meta content="email=no" name="format-detection" />
    <style type="text/css">
      a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      .btn-blue {
        display: block;
        height: 42px;
        line-height: 42px;
        text-align: center;
        border-radius: 4px;
        font-size: 18px;
        color: #ffffff;
        background-color: #4185f3;
      }
      .btn-blue:active {
        background-color: #357ae8;
      }
    </style>
  </head>
  <body ontouchstart>
    <div class="btn-blue">按钮</div>
  </body>
</html>
```

or

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
      name="viewport"
    />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
    <meta content="telephone=no" name="format-detection" />
    <meta content="email=no" name="format-detection" />
    <style type="text/css">
      a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      .btn-blue {
        display: block;
        height: 42px;
        line-height: 42px;
        text-align: center;
        border-radius: 4px;
        font-size: 18px;
        color: #ffffff;
        background-color: #4185f3;
      }
      .btn-blue:active {
        background-color: #357ae8;
      }
    </style>
  </head>
  <body>
    <div class="btn-blue">按钮</div>

    <script type="text/javascript">
      document.addEventListener("touchstart", function () {}, true);
    </script>
  </body>
</html>
```

兼容性 ios5+、部分 android 4+、winphone 8

要做到全兼容的办法，可通过绑定 ontouchstart 和 ontouchend 来控制按钮的类名

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta
      content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
      name="viewport"
    />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
    <meta content="telephone=no" name="format-detection" />
    <meta content="email=no" name="format-detection" />
    <style type="text/css">
      a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
      .btn-blue {
        display: block;
        height: 42px;
        line-height: 42px;
        text-align: center;
        border-radius: 4px;
        font-size: 18px;
        color: #ffffff;
        background-color: #4185f3;
      }
      .btn-blue-on {
        background-color: #357ae8;
      }
    </style>
  </head>
  <body>
    <div class="btn-blue">按钮</div>

    <script type="text/javascript">
      var btnBlue = document.querySelector(".btn-blue");
      btnBlue.ontouchstart = function () {
        this.className = "btn-blue btn-blue-on";
      };
      btnBlue.ontouchend = function () {
        this.className = "btn-blue";
      };
    </script>
  </body>
</html>
```

> audio 元素和 video 元素在 ios 和 andriod 中无法自动播放

- 应对方案：触屏即播

```js
$("html").one("touchstart", function () {
  audio.play();
});
```

> 开启硬件加速

- 解决页面闪白
- 保证动画流畅

```css
.css {
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
```

> 输入框获取焦点后默认弹出数字键盘

- 记得使用 type="tel"，而不是 type="number"

```html
<input type="tel" placeholder="" />
```
