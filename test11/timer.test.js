import timer from "./timer";

// jest.useFakeTimers(): 告诉 jest 测试用例里面的 setTimeout、setInterval 都用假的时间来模拟
// jest.useFakeTimers() 最好在 beforeEach 里面初始化，避免测试用例之间相互影响
// jest.runAllTimers()：让所有的定时器立即执行
// jest.runOnlyPendingTimers()：只运行队列中的已经创建的 timer
// jest.advanceTimersByTime(1000)：让时间快进，需要传递时间
beforeEach(() => {
  jest.useFakeTimers();
});
test("测试 timer", () => {
  const fn = jest.fn();
  timer(fn);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
});
test("测试 timer", () => {
  const fn = jest.fn();
  timer(fn);
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
});
