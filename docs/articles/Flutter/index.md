# Flutter

## 手势 GestureDetector

- 常用的几个手势

```dart
GestureDetector(
  onTap: () => _printMsg("点击"),
  onDoubleTap: () => _printMsg("双击"),
  onLongPress: () => _printMsg("长按"),
  onTapCancel: () => _printMsg("取消"),
  onTapUp: (e) => _printMsg("松开"),
  onTapDown: (e) => _printMsg("按下"),
  child: Container(
    decoration: BoxDecoration(color: Colors.redAccent),
    width: 100,
    height: 100,
  ),
)
```

- 拖动手势

```dart
Stack(
  children: <Widget>[
    Positioned(
      top: top,
      left: left,
      child: GestureDetector(
        onPanDown: (DragDownDetails e) {
          //打印手指按下的位置
          print("手指按下：${e.globalPosition}");
        },
        //手指滑动
        onPanUpdate: (DragUpdateDetails e) {
          setState(() {
            left += e.delta.dx;
            top += e.delta.dy;
          });
        },
        onPanEnd: (DragEndDetails e) {
          //打印滑动结束时在x、y轴上的速度
          print(e.velocity);
        },

        child: Container(
          width: 72,
          height: 72,
          decoration: BoxDecoration(
            color: Colors.blueAccent,
            borderRadius: BorderRadius.circular(36)
          ),
        ),
      ),
    )
  ],
)
```

- 缩放手势

```dart
Center(
 child: GestureDetector(
   child: Container(
     //使用OverflowBox可以让子组件宽高超过父组件
     child: OverflowBox(
       maxWidth: 2000.0,
       child: Image.network(
           "https://upload-images.jianshu.io/upload_images/10992781-a64bd14d27699266.png?imageMogr2/auto-orient/strip|imageView2/2/w/800/format/webp",
           width: width),
     ),
   ),
   onScaleUpdate: (ScaleUpdateDetails e) {
     setState(() {
       //缩放倍数在0.8到10倍之间
       width = 200 * e.scale.clamp(0.8, 10);
     });
   },
 ),
)
```

## webSocket

- 添加依赖

```yaml
#pubspec.yaml
dependencies:
  web_socket_channel: ^2.4.0
```

- 使用

```dart
import 'package:web_socket_channel/io.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import 'package:web_socket_channel/status.dart' as status;

late IOWebSocketChannel _webSocketChannel;

void initConnect() {
  _webSocketChannel = IOWebSocketChannel.connect("ws://ip:port");
  querySceneList(token);
  _webSocketChannel.stream
      .listen(this.onData, onError: onError, onDone: onDone);
}
//  请求场景列表
void querySceneList(token) {
  print("ws：请求场景列表 token:${token}");

  _webSocketChannel.sink
      .add('{"client_type": "app", "token": "${token}", "type": "list"}');
}

// 切换场景
void changeScene(token, id) {
  print("ws：切换场景");
  _webSocketChannel.sink.add(
      '{"client_type": "app", "token": "${token}", "type": "change","id":"${id}"}');
}

// 断连，然后执行重连
onDone() {
  debugPrint("ws:Socket is closed");
  _webSocketChannel = IOWebSocketChannel.connect("ws://119.3.27.227:9505");
  _webSocketChannel.stream
      .listen(this.onData, onError: onError, onDone: onDone);
  (() async {});
}

// 错误日志
onError(err) {
  debugPrint(err.runtimeType.toString());
  WebSocketChannelException ex = err;
  debugPrint(ex.message);
}

// 接受数据，数据json字符串，然后转成Map
onData(event) {
  print("ws:${json.decode(event)}");
  var result = json.decode(event);
  if (result['code'] == 1) {
    setState(() {
      _sceneListStreamController.add(result['data']);
      sceneList = result['data'];
    });
  }
}


@override
void dispose() {
  super.dispose();
  // 判断websocket 是否连接 如果连接则断开
  _webSocketChannel.sink.close(status.goingAway);
  _webSocketChannel.sink.close(status.normalClosure);
}

```
