// mock 函数的作用
// 1.捕获函数的调用和返回结果，以及 this 和调用顺序
// 2.可以让我们自由地设置返回结果
// 3.改变函数内部实现
import { runCallback, createObject, getData } from "./demo";
import axios from "axios";

// mock 函数用来捕获函数的调用。普通的函数没法进行调用追溯的
// fn 函数 mock 属性有四个属性 { calls: [], instances: [], invocationCallOrder: [], results: [] }
// calls：每次调用 fn 传入的参数,参数是在被测试的函数里面传入
// instances:每次调用 this 的指向
// invocationCallOrder：fn 调用的顺序
// results: fn 的返回值
test("测试 runCallback", () => {
  // 设置 fn 的返回值：1.jest.fn() 的括号里面写，2.fn.mockReturnValue();3.jest.fn().mockImplementation(scalar => 42 + scalar);
  // const fn = jest.fn(() => {
  //   return "hhh";
  // });
  const fn = jest.fn();
  // fn.mockReturnValue("hhh");
  fn.mockImplementation((param) => param + "hhh");
  // 返回 this
  // fn.mockImplementation(() => this);
  // fn.mockReturnThis();

  runCallback(fn);
  runCallback(fn);
  console.log(fn.mock);
  expect(fn.mock.calls[0]).toEqual(["123"]);
  expect(fn).toBeCalledWith("123");
  expect(fn.mock.results[0].value).toBe("123hhh");
  expect(fn.mock.calls.length).toBe(2);
  expect(fn).toHaveBeenCalledTimes(2);
});

test("测试 createObject", () => {
  const fn = jest.fn();
  createObject(fn);
  createObject(fn);
  console.log(fn.mock);
});

jest.mock("axios");
test("测试 getData", async () => {
  axios.get.mockResolvedValue({ data: "hello" });
  await getData().then((res) => {
    expect(res).toBe("hello");
  });
});
