# websocket 简单实现

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
    <script>
      // 创建一个Socket实例
      var socket = new WebSocket("ws://ip:port");

      // 打开Socket
      socket.onopen = function (event) {
        // 发送一个初始化消息
        socket.send("msg");
      };
      socket.onmessage = function (event) {
        console.log("收到消息", event);
      };

      // 监听Socket的关闭
      socket.onclose = function (event) {
        console.log("关闭监听", event);
      };

      function send() {
        socket.send("msg");
      }
    </script>
  </head>
  <body>
    <button onclick="send()">发送消息</button>
  </body>
</html>
```
