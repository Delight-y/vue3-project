import { createApp } from "vue";
import App from "./App.vue";
import element from "./element";
import "element-plus/dist/index.css"; // 引入全局element-plus样式
import "./assets/main.css";

const app = createApp(App);
app.use(element);
// 挂载应用
app.mount("#app");
