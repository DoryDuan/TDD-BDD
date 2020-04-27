import { generateConfig, generateConfig1 } from "./demo";

// 适合配置文件和组件测试
// 第一次会生成快照文件，只要没有修改，快照测试以后就都能通过
// 快照测试发生改变,可以按 u 来更新快照测试文件
// 多个快照测试发生改变，可以按 i 来一个一个更新快照测试,然后根据提示按 u,s,q等
// 配置文件 time 是一个一直改变的数据，可以通过给 toMatchSnapshot 传参让测试通过
test("测试 generateConfig", () => {
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date),
  });
});

test("测试 generateConfig1", () => {
  expect(generateConfig1()).toMatchSnapshot({
    time: expect.any(Date),
  });
});

// 行内 snapshot，把快照放到测试用例里面
// 需要安装模块 cnpm install prettier@1.18.2 -D
test("测试 generateConfig1", () => {
  expect(generateConfig1()).toMatchInlineSnapshot(
    {
      time: expect.any(Date),
    },
    `
    Object {
      "domain": "localhost",
      "port": 8000,
      "server": "http://localhost2",
      "time": Any<Date>,
    }
  `
  );
});
