const test = require("node:test");
const assert = require("node:assert/strict");
const sum = require("./sum");

test("2 + 3 nəticəsi 5 olmalıdır", () => {
  assert.equal(sum(2, 3), 5);
});
