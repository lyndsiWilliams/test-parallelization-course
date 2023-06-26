const { add } = require("./math");

test("should add two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("should add two decimal numbers", () => {
  expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});
