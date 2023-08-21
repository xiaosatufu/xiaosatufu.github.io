# Pinia 使用及持久化

## 安装

```bash
pnpm add pinia pinia-plugin-persistedstate
```

## 使用

- 新建/store/index.js

```js
import { createPinia, defineStore } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// defineStore 第一个参数是id，必需且值唯一
export const useUserStore = defineStore("user", {
  //state返回一个函数，防止作用域污染
  state: () => {
    return {
      userInfo: {
        name: "zhangsan",
        age: 23,
      },
      token: "",
    };
  },
  getters: {
    newName: (state) => state.userInfo.name + "vip",
  },
  actions: {
    //更新整个对象
    updateUserInfo(userInfo) {
      this.userInfo = userInfo;
    },
    //更新对象中某个属性
    updateAge(age) {
      this.userInfo.age = age;
    },
    //更新基础数据类型
    updateToken(token) {
      this.token = token;
    },
  },
  // 开始数据持久化
  persist: true,
});

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate); // 使用持久化插件

export default pinia;
```

- 在 main.js 中引入

```js
...
// pinia
import pinia from "@/store/index";

const app = createApp(App);

app.use(pinia).mount("#app");
```

- 使用

```js
import { storeToRefs } from "pinia";
import { useUserStore } from "@/store"; //路径别名，引入store

const userStore = useUserStore();

//storeToRefs 会跳过所有的 action 属性
const { userInfo, token, newName } = storeToRefs(userStore);

//action 属性直接解构
const { updateUserInfo, updateAge, updateToken } = userStore;
```
