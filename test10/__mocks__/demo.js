// 测试的时候，用这个假的 getData 替换被测试文件中真的 getData
export const getData = () => {
  return new Promise((resolve, reject) => {
    resolve("hello");
  });
};
