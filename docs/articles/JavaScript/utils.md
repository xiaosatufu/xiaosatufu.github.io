# js 工具函数

## 对比 app 版本号

```js
//对比app版本号，有时候版本不够需提示更新
export const compareVersionEle = (currVersion, targetVerison) => {
  if (!currVersion || !targetVerison) return false;
  const curr = currVersion.split(".");
  const target = targetVerison.split(".");
  for (let i = 0; i < curr.length; i++) {
    if (parseInt(curr[i]) > parseInt(target[i])) {
      return true;
    }
    if (parseInt(curr[i]) < parseInt(target[i])) {
      return false;
    }
    //相等继续
    //parseInt(curr[i]) == parseInt(target[i])  continue
  }
  return true;
};
```

## 判断是否是 android，ios，qq，wetchat

```js
export const Config = {};

Config.ua = navigator.userAgent.toLowerCase();

Config.isiOS = () => {
  return /(iphone|ipad|ipod|ios)/i.test(Config.ua);
};

Config.isAndroid = () => {
  return /(android)/i.test(Config.ua);
};

Config.isLaobaiAndroid = () => {
  return /laobaiapp android/.test(Config.ua);
};

Config.isLaobaiiOS = () => {
  return /laobaiapp ios/.test(Config.ua);
};

Config.isWeChat = () => {
  return /micromessenger/.test(Config.ua);
};

Config.isQQ = () => {
  return /qq/.test(Config.ua);
};

export default Config;
```

## 将日期时间转换为指定格式

```js
//将日期时间转换为指定格式，如：YYYY-mm-dd HH:MM表示2019-06-06 19:45
function dateFormat(fmt, date) {
    let ret;
    let opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
}

let date = new Date()
dateFormat("YYYY-mm-dd HH:MM", date)
>>> 2019-06-06 19:45`
```

## 生成随机字符串

```js
function generateRandomAlphaNum(len) {
  var rdmString = "";
  for (
    ;
    rdmString.length < len;
    rdmString += Math.random().toString(36).substr(2)
  );
  return rdmString.substr(0, len);
}
```

## 格式化 URL

```js
// This function creates a new anchor element and uses location
// properties (inherent) to get the desired URL data. Some String
// operations are used (to normalize results across browsers).

function parseURL(url) {
    var a =  document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function(){
            var ret = {},
                seg = a.search.replace(/^?/,'').split('&'),
                len = seg.length, i = 0, s;
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(//([^/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^/])/,'/$1'),
        relative: (a.href.match(/tps?://[^/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^//,'').split('/')
    };
}
Usage
var myURL = parseURL('http://abc.com:8080/dir/index.html?id=255&m=hello#top');

myURL.file;     // = 'index.html'
myURL.hash;     // = 'top'
myURL.host;     // = 'abc.com'
myURL.query;    // = '?id=255&m=hello'
myURL.params;   // = Object = { id: 255, m: hello }
myURL.path;     // = '/dir/index.html'
myURL.segments; // = Array = ['dir', 'index.html']
myURL.port;     // = '8080'
myURL.protocol; // = 'http'
myURL.source;   // = 'http://abc.com:8080/dir/index.html?id=255&m=hello#top'
```

## Textarea 输入字数限制（兼容 iOS&安卓）

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>textarea输入字数限制（兼容ios和安卓）</title>
  </head>

  <body>
    <!-- 最多输入10个字 -->
    <textarea placeholder="请输入家庭地址（必填）" rows="2"></textarea>
    <textarea placeholder="请输入家庭地址（必填）" rows="2"></textarea>
    <textarea placeholder="请输入家庭地址（必填）" rows="2"></textarea>
    <textarea placeholder="请输入家庭地址（必填）" rows="2"></textarea>
    <textarea placeholder="请输入家庭地址（必填）" rows="2"></textarea>
    <textarea placeholder="请输入家庭地址（必填）" rows="2"></textarea>
    <script>
      var textarea = document.getElementsByTagName("textarea");
      for (var i = 0; i < textarea.length; i++) {
        textarea[i].oninput = function () {
          //注意，这里要用oninput,不要用onkeyup,否则iOS系统不支持
          this.value = this.value.substring(0, 10);
        };
      }
    </script>
  </body>
</html>
```
