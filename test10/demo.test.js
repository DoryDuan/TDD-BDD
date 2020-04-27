import { getData } from "./demo"; // getData 来自模拟demo文件
import axios from "axios";

//1.jest.mock 模拟请求，axios.get.mockResolvedValue 模拟返回的结果
jest.mock("axios");
test("测试 getData", async () => {
  axios.get.mockResolvedValue({ data: "hello" });
  await getData().then((res) => {
    expect(res).toBe("hello");
  });
  const result = await getData();
  expect(result).toBe("hello");
});

// 2.跟 demo.js 文件同级目录创建文件夹 __mocks__,并新建文件 demo.js
// 用  __mocks__ 里面的 demo.js 替换 被测试的 demo.js
// 模拟的是具体的方法
// 让 jest 模拟被测试的 demo 文件，jest 会自动到  __mocks__ 文件夹下面找 demo 文件
jest.mock("./demo");
test("测试 getData", () => {
  // getData() 调用的 __mocks__ 里面的 demo.js 的 getData 方法
  return getData().then((res) => {
    expect(res).toBe("hello");
  });
});

// 3.将 jest.config.js 文件配置改成 automock: true
// 当引入一个模块的的时候，import { getData } from "./demo";
// jest 会自动检测 __mocks__目录下有没有demo文件。如果有，会将__mocks__目录下的demo文件替换被测试的demo文件

//4.被测试的 demo 文件存在不需要模拟的模块，用 jest.requireActual 从真实文件引入
const { getNumber } = jest.requireActual("./demo"); // 来自真正的demo文件
test("测试 getNumber", () => {
  expect(getNumber()).toBe(123);
});
