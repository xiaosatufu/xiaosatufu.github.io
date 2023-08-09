#Vite

### 创建命令

```
# 使用 npm
npm create vite@latest
# 使用 yarn
yarn create vite
# 使用 pnpm
pnpm create vite

```

### 深度修改样式

```
:deep(.van-search) {
  flex: 1;
}
```

### 代理配置

vite.config.js

```
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置代理
  server:{
    proxy:{
      // https://i.maoyan.com
      '/path':{
        target:'https://i.maoyan.com',//替换的服务端地址
        changeOrigin:true,//开启代理，允许跨域
        rewrite:path=>path.replace(/^\/path/,'') // 设置重写的路径
      }
    }
  }
})

```
