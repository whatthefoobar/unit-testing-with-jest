const cloneArray = require("./cloneArray");

test("clones array", () => {
  const array = [1, 2, 3];
  expect(cloneArray(array)).toEqual(array); // cannot use to be as it's 2 diff elements with different memory addresses
  expect(cloneArray(array)).not.toBe(array); // make sure it created a clone of that array and did not return the same array
});
