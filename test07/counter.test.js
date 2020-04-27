import Counter from "./counter";

// 用jest的钩子函数，对基础内容进行初始化
// 初始化的代码一定要放到钩子函数，不要直接放到 describe,不然会会有坑
// 每一个 describe 都可以有自己的 beforeAll、beforeEach、afterEach、afterAll
// 钩子函数作用域：对describe自己下面的所有的测试用例都生效
// test.only 修饰符，只执行单个测试用例，不执行其他测试用例
describe("测试 Counter", () => {
  beforeAll(() => {
    console.log("beforeAll");
  });
  let counter;
  beforeEach(() => {
    console.log("beforeEach");
    counter = new Counter();
  });
  afterEach(() => {
    console.log("afterEach");
  });
  afterAll(() => {
    console.log("afterAll");
  });
  test.only("测试 Counter 中的 addOne 方法", () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });
  test("测试 Counter 中的 minusOne 方法", () => {
    counter.minusOne();
    expect(counter.number).toBe(-1);
  });
});
