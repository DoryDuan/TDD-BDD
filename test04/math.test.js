// toBe ===
test("测试 toBe", () => {
  expect(3).toBe(3);
});

// toEqual ==
test("测试 toEqual", () => {
  const a = { a: 1 };
  expect(a).toEqual({ a: 1 });
});

// toBeNull,toBeUndefined,toBeDefined,toBeTruthy,toBeFalsy
test("测试 真假有关的匹配器", () => {
  const a = null;
  const b = undefined;
  const c = 1;
  expect(a).toBeNull();
  expect(b).toBeUndefined();
  expect(a).toBeDefined();
  expect(c).toBeTruthy();
  expect(a).toBeFalsy();
  expect(c).not.toBeFalsy();
});
// toBeGreaterThan,toBeLessThan,toBeGreaterThanOrEqual
// toBeCloseTo 浮点数
test("测试 数字相关的匹配器", () => {
  const a = 10;
  expect(a).toBeGreaterThan(1);
  expect(a).toBeLessThan(11);
  expect(a).toBeGreaterThanOrEqual(1);
  const n = 0.1;
  const m = 0.2;
  expect(n + m).toBeCloseTo(0.3);
});

// toMatch
test("测试 字符串相关的匹配器", () => {
  const str = "http.www.baidu.com";
  expect(str).toMatch("www");
  expect(str).toMatch(/www/);
});

// toContain
test("测试 数组、set相关的匹配器", () => {
  const arr = ["dory", "duan", "tan"];
  const setData = new Set(arr);
  expect(arr).toContain("dory");
  expect(setData).toContain("dory");
});

// toMatchObject
test("测试 对象相关的匹配器", () => {
  const obj = { a: 1, b: { test: 1 } };
  expect(obj).toMatchObject({ b: { test: 1 } });
});

// toThrow 方法里面的字符串必须跟抛出的错误一样
const throwNewErrorFunc = () => {
  throw new Error("this is a error");
};
test("测试 异常", () => {
  expect(throwNewErrorFunc).toThrow();
  expect(throwNewErrorFunc).toThrow("this is a error");
  expect(throwNewErrorFunc).toThrow(/this is a error/);
});
