import addDivToBody from "./demo";
import $ from "jquery";

// jest 里面对 DOM 进行测试，正常使用 jquery 就可以了
// 原因：jest 在 node 环境下模拟了一套 DOM 的 api,称为 jsDOM
// 也可以使用DOM的 api,如 document.getElementById('test')
test("测试 addDivToBody", () => {
  addDivToBody();
  addDivToBody();
  expect($("body").find("div").length).toBe(2);
  console.log($("body").find("div").length);
});
