// 封装ELement模块
import { ElButton, ElSelect } from "element-plus";

const elements = [ElButton, ElSelect];

export default function (vue) {
  elements.map((c) => {
    vue.component(c.name, c);
  });
}
