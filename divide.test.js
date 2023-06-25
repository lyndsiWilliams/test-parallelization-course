const { divide } = require("./math");

test("should divide two numbers", () => {
  expect(divide(1, 2)).toBe(0.5);
});
