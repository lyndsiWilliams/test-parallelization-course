const { subtract } = require("./math");

test("should subtract two numbers", () => {
  expect(subtract(1, 2)).toBe(-1);
});
