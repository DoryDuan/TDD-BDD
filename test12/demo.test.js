import demoFunc from "./demo";
import Util from "./util";

// 执行 demoFunc()，会创建 util 实例，并运行实例里面的 a，b 方法，a,b方法很耗性能
// 我们只需要知道 a,b方法执行过就好了，并不需要真的执行 a,b 方法
// 我们可以对 Util 类进行模拟，创造一个简单的 Util 类，让简单的 Util 类执行 a,b就行了

// 1.jest.mock('./util')
// jest.mock 会被放到文件的第一行优先执行
// jest 发现 Util是个类，jest 会自动把 Util 类的构造函数，以及 Util 里面的每一个函数都自动替换成 jest.fn()
jest.mock("./util");
test("测试 demoFunc", () => {
  demoFunc();
  expect(Util).toHaveBeenCalled();
  // console.log(Util.mock);
  // console.log(Util.mock.instances[0]);
  expect(Util.mock.instances[0].a).toHaveBeenCalled();
  expect(Util.mock.instances[0].b).toHaveBeenCalled();
});
// 2.如果对 jest.mock("./util"); 模拟不满意，可以自定义模拟
// 在__mocks__下面创建 util.js文件

// 3.直接在 mock 的第二个参数的函数里面模拟
// jest.mock("./util", () => {
//   const Util = jest.fn(() => {
//     console.log("constructor1");
//   });
//   Util.prototype.a = jest.fn(() => {
//     console.log("a1");
//   });
//   Util.prototype.b = jest.fn(() => {
//     console.log("b1");
//   });
//   return Util;
// });
