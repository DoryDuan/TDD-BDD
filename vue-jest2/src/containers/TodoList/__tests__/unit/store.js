import store from "@/store.js";

it(`当 store 接收 changeInputValue 的 commit 时， inputValue 发生改变`, () => {
  const value = "test";
  store.commit("changeInputValue", value);
  expect(store.state.inputValue).toBe(value);
});
