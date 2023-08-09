# CSS

## 一行显示，出现省略号

```css
white-space: nowrap;
text-overflow: ellipsis;
-o-text-overflow: ellipsis;
overflow: hidden;
word-break: keep-all;
```

## 两端对齐

```css
.justify {
  text-justify: inter-ideograph;
  text-align: justify;
}
```

## 多行显示，出现省略号

```css
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
display: -webkit-box;
```

## placeholder 样式

```css
/* - Chrome ≤56,
   - Safari 5-10.0
   - iOS Safari 4.2-10.2
   - Opera 15-43
   - Opera Mobile >12
   - Android Browser 2.1-4.4.4
   - Samsung Internet
   - UC Browser for Android
   - QQ Browser */
::-webkit-input-placeholder {
  color: #ccc;
  font-weight: 400;
}

/* Firefox 4-18 */
:-moz-placeholder {
  color: #ccc;
  font-weight: 400;
}

/* Firefox 19-50 */
::-moz-placeholder {
  color: #ccc;
  font-weight: 400;
}

/* - Internet Explorer 10–11
   - Internet Explorer Mobile 10-11 */
:-ms-input-placeholder {
  color: #ccc !important;
  font-weight: 400 !important;
}

/* Edge (also supports ::-webkit-input-placeholder) */
::-ms-input-placeholder {
  color: #ccc;
  font-weight: 400;
}

/* CSS Working Draft */
::placeholder {
  color: #ccc;
  font-weight: 400;
}
```

## 不滚动隐藏滚动条

```html
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <style>
      .content {
        width: 200px;
        height: 150px;
        padding-left: 10px;
        border: 1px solid #ccc;
        overflow-y: hidden;
      }
      .content:hover {
        overflow-y: auto;
      }
      .scrollbar::-webkit-scrollbar {
        width: 2px;
      }

      .scrollbar::-webkit-scrollbar-track-piece {
        background-color: #fff;
      } /* 滚动条的内层滑轨背景颜色 */

      .scrollbar::-webkit-scrollbar-track {
        background-color: #fff;
      } /* 滚动条的外层滑轨背景颜色 */

      .scrollbar::-webkit-scrollbar-thumb {
        background-color: #d4d8e2;
      } /* 滚动条的内层滑块颜色 */

      .scrollbar::-webkit-scrollbar-button {
        background-color: #fff;
        display: none;
      } /* 滑轨两头的监听按钮颜色 */
    </style>
  </head>
  <body>
    <div class="content scrollbar">
      <p>内容1</p>
      <p>内容2</p>
      <p>内容3</p>
      <p>内容4</p>
      <p>内容5</p>
      <p>内容6</p>
      <p>内容7</p>
    </div>
  </body>
</html>
```

## css 背景渐变色动画

```css
.page {
  background: linear-gradient(
    -120deg,
    #5aebef,
    #d3faf4,
    #ddf8ff,
    #d9f5e8
  ); /* 背景渐变 */
  background-size: 500% 500%; /* 背景大小 */
  animation: gradientBG 15s ease infinite; /* 应用动画 */
}

/* 定义 keyframes 动画 */
@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
```
