const { multiply } = require("./math");

test("should multiply two numbers", () => {
  expect(multiply(1, 2)).toBe(2);
});
