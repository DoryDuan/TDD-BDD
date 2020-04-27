import { fetchData, fetchData1, fetchData2 } from "./fetchData";

// 回调 异步函数，回调函数不执行
// 解决方案：传递了done参数，只有调用了done()，测试用例才会执行结束
test("fetchData 返回结果为 {success :true}", (done) => {
  fetchData((data) => {
    expect(data).toEqual({ success: true });
    done();
  });
});

// promise 异步函数,通过调用 then 方法或者 catch 方法进行测试
// then 方法里面的回调函数不执行
// 解决方案 1.return promise 函数, 2.done()，3.resolves, 4.await
test("fetchData1 返回结果为 {success :true}", () => {
  return fetchData1().then((response) => {
    expect(response.data).toEqual({ success: true });
  });
});
test("fetchData1 返回结果为 {success :true}", (done) => {
  fetchData1().then((response) => {
    expect(response.data).toEqual({ success: true });
    done();
  });
});
// expect(fetchData1()).resolves 请求拿到的结果
test("fetchData1 返回结果为 {success :true}", () => {
  return expect(fetchData1()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});
test("fetchData1 返回结果为 {success :true}", async () => {
  await expect(fetchData1()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});
test("fetchData1 返回结果为 {success :true}", async () => {
  const result = await fetchData1();
  await expect(result.data).toEqual({
    success: true,
  });
});
// catch(e) e 是一个error对象, 如果 fetchData2() 能正确地请求数据，就不会走 catch
// 解决方案：expect.assertions(1),expect 语句至少执行一次
test("fetchData2 返回结果为 404", () => {
  expect.assertions(1);
  return fetchData2().catch((e) => {
    expect(e.toString().indexOf("404") > -1).toBe(true);
  });
});
test("fetchData2 返回结果为 404", () => {
  return expect(fetchData2()).rejects.toThrow();
});
test("fetchData2 返回结果为 404", async () => {
  await expect(fetchData2()).rejects.toThrow();
});
test("fetchData2 返回结果为 404", async () => {
  expect.assertions(1);
  try {
    await fetchData2();
  } catch (e) {
    expect(e.toString().indexOf("404") > -1).toBe(true);
  }
});
