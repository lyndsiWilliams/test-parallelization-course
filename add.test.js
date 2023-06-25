const { add } = require("./math");

test("should add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});
