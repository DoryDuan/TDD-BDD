// 当我们编写 BDD 测试的时候，结合 story 来写

import { mount, createLocalVue } from "@vue/test-utils";
import { findTestWrapper } from "@/utils/testUtils";
import TodoList from "@/containers/TodoList/TodoList.vue";
import store from "@/store.js";
import axios from "../../__mocks__/axios";
jest.mock("axios");

const localVue = createLocalVue();

beforeEach(() => {
  axios.success = true;
});

it(`1. 用户进入页面时，请求远程数据
    2. 用户会在 header 输入框输入内容
    3. 用户会触发回车键
    4. 列表项应该增加用户输入内容的列表项`, async () => {
  const wrapper = mount(TodoList, {
    localVue,
    store
  });
  // mounted 钩子发送 ajax 请求，拿到2条数据
  await wrapper.vm.$nextTick();
  expect(wrapper.vm.undoList.length).toBe(2);
  // header 输入框输入内容,触发回车键
  const inputEl = findTestWrapper(wrapper, "header-input").at(0);
  const content = "keyup dory";
  inputEl.setValue(content);
  inputEl.trigger("keyup.enter");
  const content1 = "keyup dory1";
  inputEl.setValue(content1);
  inputEl.trigger("keyup.enter");
  expect(wrapper.vm.undoList.length).toBe(4);
  // 等待页面渲染
  await wrapper.vm.$nextTick();
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(listItems.length).toBe(4);
});

it(`1.用户进入页面时，请求远程数据
    2.列表应该展示远程数据`, async () => {
  const wrapper = mount(TodoList, {
    store
  });
  await wrapper.vm.$nextTick();
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(listItems.length).toBe(2);
});

it(`1.用户进入页面时，请求远程数据失败
    2.列表应该展示空数据，而不是挂掉`, async () => {
  axios.success = false;
  const wrapper = mount(TodoList, {
    store
  });
  await wrapper.vm.$nextTick();
  const listItems = findTestWrapper(wrapper, "list-item");
  expect(listItems.length).toBe(0);
});
