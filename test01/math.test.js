function test(desc, fn) {
  try {
    fn();
    console.log(`${desc} 通过测试`);
  } catch (e) {
    console.log(`${desc} 没有通过测试 ${e}`);
  }
}
function expect(result) {
  return {
    toBe: function (actual) {
      if (result !== actual) {
        throw new Error(`预期值和实际值不相等 预期${actual} 结果却是${result}`);
      }
    },
  };
}
test("测试加法", () => {
  expect(add(3, 3)).toBe(6);
});
test("测试减法", () => {
  expect(minus(3, 3)).toBe(0);
});
